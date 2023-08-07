const { USERAGENT, XFORWARDEDFOR } = require('./config/config.default')
const axios = require('axios')
// const { test_api } = require('./test_api/05-test_api')

// http://192.168.13.11:6090/paas/hy/manage/v1/auth/login
const login_lessee_saas = () => axios({
  // url: '/hy-paas/paas/hy/manage/v1/auth/login',
  url: `http://192.168.13.11:6060/login`,
  method: 'post',
  data: {
    "username": "admin",
    "password": "n8+wekN7GQenwWyUBPVDnA==",
    // "password": "IZR8Vk3Bcf/ygPOo0+3oSA==",
    "pwd_encryption_type": 2,
    "client_type": 4,
    "lessee_code": "hy",
    "app_code": "gcxsgl",
    "client_id": "client_hy_web",
    "client_secret": "hy123456",
    "ignore_pwd_status": 1,
    // "ver_code_Id": "a3561601beb44b2e94e1c03104317af1",
    "ver_code_Id": '22931063bc0e4188a7fb792191604272'
  },
  headers: {
    // 'Content-Type': 'multipart/form-data',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
  // "verCodeId": "e3cb8adec4484ae898e1d361b4cdec28"
  // data: { loginName: "20053", password: "OwP44+flxGIwJsYavo/ISQ==", clientType: "4", clientName: "str" }
})
let res

const ex_login_lessee_saas = async () => {
  res = await login_lessee_saas()
  // console.log(res)

  if (res.status === 200) {
    console.log('登录成功')
    console.log(res.data)

  }
  return res.data.access_token

}

ex_login_lessee_saas()

// console.log(access_token)
// console.log(res)

// module.exports = {
//   ex_login
// }


