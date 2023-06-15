const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, UPDATE_API_CODE } = require('../config/config.default')
const data_update = require('../public/data_update.json')
const http = require('../../utils/http')

const update_table = (data = data_update) => http({
  url: `/hy-saas/hy/saas/hy/20014/api/${UPDATE_API_CODE}`,
  method: 'post',
  data,
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

update_table(data_update)

module.exports = {
  update_table
}