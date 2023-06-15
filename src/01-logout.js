const { USERAGENT, XFORWARDEDFOR, ACCESS_TOKEN, LOGINNAME } = require('./config/config.default')
const http = require('../utils/http')
// const { test_api } = require('./test_api/05-test_api')

// http://192.168.13.11:6090/paas/hy/manage/v1/auth/login
const logout = () => http({
  // url: '/hy-paas/paas/hy/manage/v1/auth/login',
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/manage/v1/auth/logout`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
  // "verCodeId": "e3cb8adec4484ae898e1d361b4cdec28"
  // data: { loginName: "20053", password: "OwP44+flxGIwJsYavo/ISQ==", clientType: "4", clientName: "str" }
})
let res

const ex_logout = async () => {
  res = await logout()
  // console.log(res)

  if (res.data.code === '00000') {
    console.log(res.data.result)

  } else {
    console.log(res.data)
  }
  return res.data

}

ex_logout()

// console.log(access_token)
// console.log(res)

// module.exports = {
//   ex_login
// }


