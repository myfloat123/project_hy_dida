const xlsx = require('xlsx')
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
  SHOWFIELDCODE,
  DECIMALDIGITS,
  AUXTABLETYPE
} = require('../config/config.default')
class TestController {
  async test(ctx) {
    // console.log(ctx)
    // console.log(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '测试成功',
      result: ''
    }
  }

  async testPost(ctx) {
    ctx.body = {
      code: 0,
      message: '测试提交数据成功',
      result: ctx.request.body
    }
  }

  async testImport(ctx) {
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

    // 读取上传的xlsx文件为工作簿对象
    const workbook = xlsx.read(file.filepath, { type: 'file' })

    // 第一个表格名字
    const sheetName = workbook.SheetNames[0]
    // 第一个表格内容
    const sheet = workbook.Sheets[sheetName]

    // 将表格内容转化为json类型数据
    const dataList = xlsx.utils.sheet_to_json(sheet)
    console.log(dataList)

    // 查找json类型表格内容中“字典类型名称”字段
    let dictTypeNameObj = dataList.find(item => item[FIELDNAME] == DICTTYPENAME)
    // 查找json类型表格内容中“字典值”字段
    let dictValue = dataList.find(item => item[FIELDLENGTH] == DICTVALUE)
    // 查询json类型表格内容中“附属表类型”字段
    let auxTableTypeObj = dataList.find(item => item[FIELDLENGTH] == AUXTABLETYPE)
    // 定义字段数组和字典数组
    let fieldArr = []
    let dictionaryArr = []
    let tableArr = []
    let fieldIndexEnd
    let dictionaryIndexStart
    let dictionaryIndexEnd
    // 如果查找到“字典类型名称”和“字典值”这两个字段，则通过这两个字段分割出“字段数组”和“字典数组”
    if (dictTypeNameObj && dictValue && auxTableTypeObj) {
      fieldIndexEnd = dataList.findIndex(item => item[FIELDNAME] == DICTTYPENAME)

      dictionaryIndexStart = dataList.findIndex(item => item[FIELDLENGTH] == DICTVALUE)

      dictionaryIndexEnd = dataList.findIndex(item => item[FIELDLENGTH] == AUXTABLETYPE)

      fieldArr = dataList.slice(0, fieldIndexEnd)
      dictionaryArr = dataList.slice(dictionaryIndexStart + 1, dictionaryIndexEnd)
      tableArr = dataList.slice(dictionaryIndexEnd + 1)

    } else if (dictTypeNameObj && dictValue) {
      fieldIndexEnd = dataList.findIndex(item => item[FIELDNAME] == DICTTYPENAME)

      dictionaryIndexStart = dataList.findIndex(item => item[FIELDLENGTH] == DICTVALUE)

      fieldArr = dataList.slice(0, fieldIndexEnd)
      dictionaryArr = dataList.slice(dictionaryIndexStart + 1)
    } else if (auxTableTypeObj) {
      fieldIndexEnd = dataList.findIndex(item => item[FIELDLENGTH] == AUXTABLETYPE)
      tableArr = dataList.slice(fieldIndexEnd + 1)
    } else {
      fieldArr = dataList
    }

    ctx.body = {
      code: 0,
      message: '导入成功',
      result: {
        dataList,
        fieldArr,
        dictionaryArr,
        tableArr
      }
    }
  }
}

module.exports = new TestController()