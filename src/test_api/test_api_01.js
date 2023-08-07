const { ACCESS_TOKEN } = require('../config/config.default')
const http = require('../../utils/http')

http({
  url: `/hy-saas/hy/saas/hy/releasepj/api/bis_api_1628051091829`,
  method: 'post',
  data:
    { "shururenyuanmingcheng": "", "flowTemplateKey": "act_1643511180029206528", "nodeKey": "Activity_17vmjyl", "candidatorOpType": 0, "_page": { "from": 0, "size": 10 } },
  headers: {
    'Authorization': 'Bearer ' + ACCESS_TOKEN
  }
}).then(res => {
  console.log(res.data.result.data)
}).catch(err => {
  console.log(err)
})