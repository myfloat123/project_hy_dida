const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, RELEVANCETABLEID, APPCODE } = require('./config/config.default')

// 入参为关联引用表id，若无入参则默认使用环境变量RELEVANCETABLEID
const relevance_quote_table = (tableId) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v2/tables/other/${tableId ? tableId : RELEVANCETABLEID}?handleType=field`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res)
  if (res.data.code === '00000') {

    console.log('关联引用表成功')
    // console.log(res.data.result)
    return res.data.result
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

relevance_quote_table('1418509898995609600').then(res => {
  console.log(res)
})

module.exports = {
  relevance_quote_table,
}