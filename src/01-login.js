const { LOGINNAME, PASSWORD } = require('./config/config.default')
const http = require('../utils/http')
// const { test_api } = require('./test_api/05-test_api')

// http://192.168.13.11:6090/paas/hy/manage/v1/auth/login
const login = () => http({
  // url: '/hy-paas/paas/hy/manage/v1/auth/login',
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/manage/v1/auth/login`,
  method: 'post',
  data: { loginName: LOGINNAME, password: PASSWORD, clientType: "4", clientName: "str" },
  // data: { loginName: "20053", password: "OwP44+flxGIwJsYavo/ISQ==", clientType: "4", clientName: "str" }
})
let res

const ex_login = async () => {
  res = await login()

  if (res.data.code === '00000') {
    console.log('登录成功')
    console.log(res.data.result.access_token)
    // console.log(http.interceptors.request)
    let conf = await http.interceptors.request.use(config => {
      config.headers.Authorization = 'Bearer ' + res.data.result.access_token
      // console.log('配置', config)
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })

    // console.log(conf)
    // console.log(http)
    // let res1 = await test_api()
    // console.log(res1)

  }
  return res.data

}

ex_login()

// console.log(access_token)
// console.log(res)

// module.exports = {
//   ex_login
// }


