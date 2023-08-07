const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')

const get_quote_table_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v2/tables/list?excludeTableTypes=DICT`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {

    console.log('获取引用表列表成功')
    // console.log(res.data.result.data)
    return res.data.result.data
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

// const exec = async () => {
//   let res = await get_quote_table_list()
//   // console.log(res)
//   let quote_table = {}
//   // 获取关联引用表信息
//   let is_quote_table = res.some(item4 => {
//     if (item4.code == 'hr_member') {
//       quote_table = item4
//       return true
//     }
//   })
//   console.log(is_quote_table)
//   console.log(quote_table)
// }

// exec()


// get_quote_table_list().then(res => {
//   // console.log(res[55])
//   let quote_table
//   res.some(item => {
//     if (item.code == 'class_info') {
//       quote_table = item
//       return true
//     }
//   })
//   console.log(quote_table)
//   // let quote_table_arr = res.filter(item => item.code == 'class_info')
//   // console.log(quote_table_arr)
// })

// get_quote_table_list().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

module.exports = {
  get_quote_table_list,
}