const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, TABLEID, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')

// 入参为tableId，若无入参则默认使用环境变量TABLEID
const get_table_fields = (tableId) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v2/tables/other/${tableId ? tableId : TABLEID}?handleType=field`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {

    console.log('获取表字段成功')
    // console.log(res.data.result)
    return res.data.result
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

// get_table_fields().then(res => {
//   console.log(res)
// })

module.exports = {
  get_table_fields,
}