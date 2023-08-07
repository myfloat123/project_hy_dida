const { ACCESS_TOKEN, USERAGENT, XFORWARDEDFOR, LOGINNAME, PASSWORD } = require('.././src/config/config.default')
const axios = require('axios')

const http = axios.create({
  // baseURL: 'http://training-dida.haoyuntech.com',
  baseURL: 'http://192.168.13.11:6090',
  // baseURL: 'http://192.168.13.11:7090'
})

http.interceptors.request.use(config => {
  // config.headers.Authorization = 'Bearer ' + ACCESS_TOKEN
  config.headers['User-Agent'] = USERAGENT
  config.headers['X-Forwarded-For'] = XFORWARDEDFOR
  return config
},
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(res => {
  return res
},
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

module.exports = http
