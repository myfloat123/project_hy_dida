const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, CUSTOM_API_CODE } = require('../config/config.default')
const http = require('../../utils/http')

const search_hr_codes = () => http({
  // url: `/hy-saas/hy/saas/hy/20014/api/${DETAIL_API_CODE}`,
  url: `http://192.168.13.11:7090/hy/saas/hy/gcxsgl/api/bis_api_1689263853344`,
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

search_hr_codes()

module.exports = {
  search_hr_codes
}