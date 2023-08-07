const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, CUSTOM_API_CODE } = require('../config/config.default')
const http = require('../../utils/http')

const test_custom_api = (data) => http({
  // url: `/hy-saas/hy/saas/hy/20014/api/${DETAIL_API_CODE}`,
  url: `http://192.168.13.11:7090/hy/saas/hy/gcxsgl/api/${CUSTOM_API_CODE}`,
  method: 'post',
  // data: { "_page": { "size": 100, "from": 0 }, "id": id },
  data,
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

let data = {
  "zhujianjihe": "1669223960614539265,1669224628830081025,1673644322622279681",
  "maximum_profit_margin": 0.2,
  "standard_profit_margin": 0.1,
  "minimum_profit_margin": 0
}

test_custom_api(data)

module.exports = {
  test_custom_api
}