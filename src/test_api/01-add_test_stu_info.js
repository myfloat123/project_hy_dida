const { ACCESS_TOKEN } = require('../config/config.default')
const http = require('../../utils/http')

// let data = {
//   "stu_code": "S003",
//   "stu_phone": "10012",
//   "stu_address": "东莞",
//   "stu_age": "23",
//   "stu_name": "张三",
//   "stu_class": "信管193",
//   "stu_specialty": "信息管理与信息系统"
// }

const add_test_stu_info = (data) => http({
  url: `/hy-saas/hy/saas/hy/20014/api/bis_api_1660326528405352449`,
  method: 'post',
  data,
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN
  }
}).then(res => {
  // console.log(res)
  if (res.data.code === 'SA0000') {
    console.log(res.data.msg)
  } else {
    console.log('新增失败')
  }
}).catch(err => {
  console.log(err)
})

module.exports = {
  add_test_stu_info
}