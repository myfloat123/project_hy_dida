const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, EMPTY_API_CODE } = require('../config/config.default')
const http = require('../../utils/http')

const empty_table = () => http({
  url: `/hy-saas/hy/saas/hy/20014/api/${EMPTY_API_CODE}`,
  method: 'post',
  data: {},
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

empty_table()

module.exports = {
  empty_table
}