const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, INSERT_API_CODE } = require('../config/config.default')
const data_insert = require('../public/data_insert.json')
const http = require('../../utils/http')

const insert_table = (data = data_insert) => http({
  url: `/hy-saas/hy/saas/hy/20014/api/${INSERT_API_CODE}`,
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

// insert_table()

module.exports = {
  insert_table
}