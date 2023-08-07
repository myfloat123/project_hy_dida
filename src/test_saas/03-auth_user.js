const http = require('../../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1, INSERT_API_CODE, AUTHORIZATION_API_CODE } = require('../config/config.default')

const auth_user = (data) => http({
  url: `/hy-saas/hy/saas/hy/${APPCODE1}/api/${AUTHORIZATION_API_CODE}`,
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
    // console.log(res.data.result)
    return res.data.result
  } else {
    return res.data
  }
}).catch(err => {
  console.log(err)
})

let data = { "roleID": "1640642943624679424", "info": [{ "roleId": "1640642943624679424", "userId": "1" }, { "roleId": "1640642943624679424", "userId": "1627322756930473985" }, { "roleId": "1640642943624679424", "userId": "1647797975163867137" }, { "roleId": "1640642943624679424", "userId": "1668510989722587137" }, { "roleId": "1640642943624679424", "userId": "1673375848587071489" }] }

auth_user(data).then(res => {
  console.log(res)
})

module.exports = {
  auth_user,
}