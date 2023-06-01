const { ACCESS_TOKEN } = require('../config/config.default')
const http = require('../../utils/http')

const batchRemove_stu_info = () => http({
  url: `/hy-saas/hy/saas/hy/20014/api/bis_api_1660334800713691137`,
  method: 'post',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
  }
}).then(res => {
  console.log(res.data, '成功')
}).catch(err => {
  console.log(err)
})

module.exports = {
  batchRemove_stu_info
}