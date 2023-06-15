const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, DELETE_API_CODE } = require('../config/config.default')
const http = require('../../utils/http')

const delete_table = (id) => http({
  url: `/hy-saas/hy/saas/hy/20014/api/${DELETE_API_CODE}`,
  method: 'post',
  data: { id },
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
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

delete_table(['1667214350143721476', '1667214350143721473'])

module.exports = {
  delete_table
}