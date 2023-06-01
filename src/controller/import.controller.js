const xlsx = require('xlsx')
const data_normal = require('../public/data_normal.json')
const data_quote = require('../public/data_quote.json')
const data_dict = require('../public/data_dict.json')
// const data_pk = require('../public/data_pk.json')
// const data_fk = require('../public/data_fk.json')
const {
  TABLEID,
  FIELDNAME,
  DICTTYPENAME,
  FIELDLENGTH,
  DICTVALUE,
  DICTSOURCE,
  FIELDCODE,
  FIELDTYPE,
  REQUIRED,
  UNIQUE,
  TABLECODE,
  REFTABLECODE,
  REFFIELDCODE,
  SHOWFIELDCODE
} = require('../config/config.default')
const { create_dictionary, data_dictionary } = require('../06-create_dictionary')
// const { get_dictionary_list } = require('../07-get_dictionary_list')
const { get_one_dictionary } = require('../13-get_one_dictionary')
const { relevance_dictionary } = require('../08-relevance_dictionary')
const { get_quote_table_list } = require('../14-get_quote_table_list')
const { relevance_quote_table } = require('../15-relevance_quote_table')
const { add_field } = require('../02-add_field')

class ImportController {
  async lead(ctx) {
    // console.log(ctx.request.headers)
    const { file = '' } = ctx.request.files
    // console.log(file)
    // console.log('导入')
    // console.log(ctx.request.files.file)
    if (file.filepath == undefined) {
      ctx.body = {
        code: -1,
        message: '请上传文件',
        result: ''
      }
      return
    }
    // 数据类型
    const dataTypeList = [
      { id: 1, dataType: 'NORMAL', dataType_zh_CN: '常规' },
      { id: 2, dataType: 'PK', dataType_zh_CN: '主键' },
      { id: 3, dataType: 'QUOTE', dataType_zh_CN: '引用' },
      { id: 4, dataType: 'DICT', dataType_zh_CN: '字典' },
      { id: 5, dataType: 'FK', dataType_zh_CN: '外键' },
    ]
    // 字段类型
    const fieldTypeList = [
      { id: 1, fieldType: 'STRING', fieldType_zh_CN: '字符串' },
      { id: 2, fieldType: 'INT', fieldType_zh_CN: '数字' },
      { id: 3, fieldType: 'TIME', fieldType_zh_CN: '时间' },
      { id: 4, fieldType: 'DATE', fieldType_zh_CN: '日期' },
      { id: 5, fieldType: 'DATE_TIME', fieldType_zh_CN: '日期时间' },
      { id: 6, fieldType: 'TEXT', fieldType_zh_CN: '超大文本' }
    ]
    // 是否
    const whetherList = [
      { id: 0, whether: 'false', whether_zh_CN: '否' },
      { id: 1, whether: 'true', whether_zh_CN: '是' }
    ]
    // 读取上传的xlsx文件为工作簿对象
    const workbook = xlsx.read(file.filepath, { type: 'file' })

    // 第一个表格名字
    const sheetName = workbook.SheetNames[0]
    // 第一个表格内容
    const sheet = workbook.Sheets[sheetName]

    // 将表格内容转化为json类型数据
    const dataList = xlsx.utils.sheet_to_json(sheet)
    // console.log(dataList)
    // console.log(dataList.findIndex(item => item['字段名称'] == '字典类型名称'))
    // console.log(dataList.findIndex(item => item['字段长度'] == '字典值'))

    // 查找json类型表格内容中“字典类型名称”字段
    let dictTypeNameObj = dataList.find(item => item[FIELDNAME] == DICTTYPENAME)
    // 查找json类型表格内容中“字典值”字段
    let dictValue = dataList.find(item => item[FIELDLENGTH] == DICTVALUE)
    // 定义字段数组和字典数组
    let fieldArr = []
    let dictionaryArr = []
    // 如果查找到“字典类型名称”和“字典值”这两个字段，则通过这两个字段分割出“字段数组”和“字典数组”
    if (dictTypeNameObj && dictValue) {
      let fieldIndexEnd = dataList.findIndex(item => item[FIELDNAME] == DICTTYPENAME)

      let dictionaryIndexStart = dataList.findIndex(item => item[FIELDLENGTH] == DICTVALUE)

      fieldArr = dataList.slice(0, fieldIndexEnd)
      dictionaryArr = dataList.slice(dictionaryIndexStart + 1)
    } else {
      fieldArr = dataList
    }


    // 定义异步新增字段函数
    async function processFieldArr(fieldArr) {
      for (let i = 0; i < fieldArr.length; i++) {
        let item = fieldArr[i]
        console.log(item)
        // 添加数据类型为“字典”的字段
        if (item[DICTSOURCE] != "" && item[DICTSOURCE] != undefined) {
          // console.log(i)
          // 处理字典字段参数
          let data = data_dict
          data.name = item[FIELDNAME]
          data.code = item[FIELDCODE]
          data.fieldSize = item[FIELDLENGTH] - 0
          data.tableId = TABLEID

          fieldTypeList.forEach((item1) => {
            if (item1.fieldType_zh_CN == item[FIELDTYPE]) {
              data.fieldType = item1.fieldType
            }
          })

          whetherList.forEach((item2) => {
            if (item2.whether_zh_CN == item[REQUIRED]) {
              data.fieldProperty.required = item2.whether
              data.fieldPropertyDTOList[0].value = item2.whether
            }
            if (item2.whether_zh_CN == item[UNIQUE]) {
              data.fieldProperty.unique = item2.whether
              data.fieldPropertyDTOList[1].value = item2.whether
            }
          })

          data_dictionary.name = item[FIELDNAME]
          data_dictionary.code = item[DICTSOURCE]

          data_dictionary.items = []
          let dictionary_code_arr = []
          dictionaryArr.forEach((item3, i) => {
            if (!dictionary_code_arr.includes(item3[TABLECODE])) {
              dictionary_code_arr.push(item3[TABLECODE])
            }

            if (item3[FIELDNAME] == data_dictionary.name) {
              data_dictionary.items.push({
                code: item3[FIELDLENGTH],
                name: item3[FIELDTYPE],
                renderBgColor: "#fff",
                renderFontColor: "#000",
              })
            }
          })
          // console.log(dictionary_code_arr)

          let dictionary_name_arr = []
          let { name } = data_dictionary

          let nameArr = name.split("")
          // let nameArr_zh_CN = []
          // nameArr.forEach((item, i) => {
          //   if (isNaN(+item)) {
          //     nameArr_zh_CN.push(item)
          //   }
          // })
          // console.log(data)
          // let nameStr = nameArr_zh_CN.join("")
          let nameStr = nameArr.join("")
          // 动态创建匹配字典的正则表达式
          let reg = new RegExp(nameStr + '$')
          // console.log(reg)
          // let res = await get_dictionary_list()

          // 获取符合条件的某个字典
          let res = await get_one_dictionary(nameStr)
          // console.log(res)
          dictionary_name_arr = res.data.map((item) => {
            return {
              id: item.id,
              name: item.name,
              code: item.code,
            }
          })

          // console.log(dictionary_name_arr)
          let dictId
          let is_dictionary = dictionary_name_arr.some((item, i) => {
            // console.log(reg)
            // console.log(item.name)
            // console.log(reg.test(item.name))
            if (reg.test(item.name)) {
              console.log("执行关联字典")
              dictId = item.id
              // console.log(item.name)
              // console.log(dictId)
              return true
            }
          })
          // console.log("is_dictionary", is_dictionary)
          // 字典已存在则关联字典
          if (is_dictionary) {
            const res1 = await relevance_dictionary(dictId)
            data.dicValues = res1.data.result.items
            data.dictionaryForeign.refTableCode = res1.data.result.code
            data.dicDto.id = dictId
            data.dicDto.name = res1.data.result.name
            data.dicDto.code = res1.data.result.code
            console.log("字典名称", data.dicDto.name)
            await add_field(data)
            // console.log(data)
          } else {
            // 字典不存在则创建字典，并关联字典
            console.log("执行创建字典")
            let res2 = await create_dictionary(data_dictionary)
            dictId = res2.data.result
            data.dicDto.id = dictId

            let res3 = await relevance_dictionary(dictId)
            data.dicValues = res3.data.result.items
            data.dictionaryForeign.refTableCode = res3.data.result.code
            data.dicDto.name = res3.data.result.name
            // 添加“字典”类型字段
            await add_field(data)
            console.log(data_dictionary)
          }
        } else if (item[REFTABLECODE] != "" && item[REFTABLECODE] != undefined) {
          // 添加数据类型为“引用”的字段
          // 处理引用字段参数
          let data = data_quote
          data.name = item[FIELDNAME]
          data.code = item[FIELDCODE]
          data.fieldSize = item[FIELDLENGTH] - 0
          data.tableId = TABLEID

          fieldTypeList.forEach((item1) => {
            if (item1.fieldType_zh_CN == item[FIELDTYPE]) {
              data.fieldType = item1.fieldType
            }
          })

          whetherList.forEach((item2) => {
            if (item2.whether_zh_CN == item[REQUIRED]) {
              data.fieldProperty.required = item2.whether
              data.fieldPropertyDTOList[0].value = item2.whether
            }
            if (item2.whether_zh_CN == item[UNIQUE]) {
              data.fieldProperty.unique = item2.whether
              data.fieldPropertyDTOList[1].value = item2.whether
            }
          })

          // 获取引用表列表信息
          let res = await get_quote_table_list()
          let quote_table = {}
          // 获取关联引用表信息
          let is_quote_table = res.some(item4 => {
            if (item4.code == item[REFTABLECODE]) {
              quote_table = item4
              return true
            }
          })

          // 如果存在关联引用表，则关联引用表
          if (is_quote_table) {
            // 关联引用表
            let res = await relevance_quote_table(quote_table.id)
            // 处理引用字段参数
            data.referenceConfig.fieldCode = item[FIELDCODE]
            data.referenceConfig.refTableCode = item[REFTABLECODE]
            data.referenceConfig.refFieldCode = item[REFFIELDCODE]
            data.referenceConfig.refFieldId = res.find(item5 => item5.code == item[REFFIELDCODE]).id
            data.referenceConfig.refDisplayFieldCode = item[SHOWFIELDCODE]
            data.referenceConfig.refDisplayFieldId = res.find(item6 => item6.code == item[SHOWFIELDCODE]).id
            data.referenceConfig.refTableId = quote_table.id + ''
            data.fieldPropertyDTOList[0].value = item[REQUIRED]
            data.fieldPropertyDTOList[1].value = item[UNIQUE]

            // 添加“引用”类型字段
            await add_field(data)
          } else {
            ctx.body = {
              code: -1,
              message: '引用表不存在',
              result: ''
            }
          }
        } else {
          // 添加数据类型为“常规”的字段
          // 处理常规字典参数
          let data = data_normal
          data.name = item[FIELDNAME]
          data.code = item[FIELDCODE]
          data.fieldSize = item[FIELDLENGTH] - 0
          data.tableId = TABLEID

          fieldTypeList.forEach((item1) => {
            if (item1.fieldType_zh_CN == item[FIELDTYPE]) {
              data.fieldType = item1.fieldType
            }
          })

          whetherList.forEach((item2) => {
            if (item2.whether_zh_CN == item[REQUIRED]) {
              data.fieldProperty.required = item2.whether
              data.fieldPropertyDTOList[0].value = item2.whether
            }
            if (item2.whether_zh_CN == item[UNIQUE]) {
              data.fieldProperty.unique = item2.whether
              data.fieldPropertyDTOList[1].value = item2.whether
            }
          })

          // 添加“常规”字段
          await add_field(data)
          // console.log(data)
        }
      }
    }

    processFieldArr(fieldArr) // 调用异步函数


    // 响应数据给前端
    ctx.body = {
      code: 0,
      message: '导入成功',
      result: {
        dataList,
        fieldArr,
        dictionaryArr
      }
    }
  }
}

module.exports = new ImportController()