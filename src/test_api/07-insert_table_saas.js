const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, APPCODE, APICODE } = require('../config/config.default')
let data_insert = require('../public/data_insert.json')
const http = require('../../utils/http')

const insert_table_saas = (data) => http({
  url: `/hy/saas/hy/${APPCODE}/api/${APICODE}`,
  method: 'post',
  // data: { "recruit_code_xyf": "1000", "plan_recruit_number_xyf": "10", "recruit_position_xyf": "产品经理" },
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
    console.log(res)
    return res.data
  }

}).catch(err => {
  console.log(err)
})

// insert_table_saas(data_insert)

module.exports = {
  insert_table_saas
}