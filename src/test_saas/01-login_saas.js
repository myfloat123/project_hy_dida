const http = require('../../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1, INSERT_API_CODE } = require('../config/config.default')

const login_saas = (data) => http({
  url: `/hy-auth/login`,
  method: 'post',
  data,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res)
  if (res.status == 200) {
    // console.log(res.data)
    return res.data
  }
}).catch(err => {
  console.log(err)
})

let data = {
  username: 'admin',
  password: 'n8+wekN7GQenwWyUBPVDnA==',
  pwd_encryption_type: 2,
  client_type: 4,
  lessee_code: 'hy',
  app_code: 'rsglxt13',
  client_id: 'client_hy_web',
  client_secret: 'hy123456'
}

login_saas(data).then(res => {
  console.log(res.access_token)
})

module.exports = {
  login_saas,
}