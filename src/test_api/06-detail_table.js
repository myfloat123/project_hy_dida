const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, DETAIL_API_CODE } = require('../config/config.default')
const http = require('../../utils/http')

const detail_table = (id) => http({
  url: `/hy-saas/hy/saas/hy/20014/api/${DETAIL_API_CODE}`,
  method: 'post',
  data: { "_page": { "size": 100, "from": 0 }, "id": id },
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

detail_table('1667220454391156737')

module.exports = {
  detail_table
}