const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, LIST_API_CODE } = require('../config/config.default')
const http = require('../../utils/http')

const list_table = () => http({
  url: `/hy-saas/hy/saas/hy/20014/api/${LIST_API_CODE}`,
  method: 'post',
  data: { "_page": { "size": 100, "from": 0 } },
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res)
  if (res.data.code == 'SA0000') {
    console.log(res.data.result)
    return res.data.result
  } else {
    console.log(res.data)
    return res.data
  }

}).catch(err => {
  console.log(err)
})

list_table()

module.exports = {
  list_table
}