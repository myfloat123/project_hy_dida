const http = require('../../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1, INSERT_API_CODE } = require('../config/config.default')

const add_user = (data) => http({
  url: `/hy-saas/hy/saas/hy/${APPCODE1}/api/${INSERT_API_CODE}`,
  method: 'post',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  },
  data
}).then(res => {
  // console.log(res.data)
  if (res.data.code == 'SA0000') {
    console.log(res.data.result)
    return res.data
  } else {
    return res.data
  }
}).catch(err => {
  console.log(err)
})

let data = {
  username: 'HY04004',
  user_account_name: 'HY04004',
  password: 'Abc12345'
}

add_user(data).then(res => {
  console.log(res)
})

module.exports = {
  add_user,
}