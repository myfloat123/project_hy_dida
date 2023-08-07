const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, OFFSET, SIZE, APPCODE1 } = require('./config/config.default')

const get_api_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v1/api-metadata/list`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    // console.log(res.data.result.data)
    console.log('获取api列表信息成功')
    return res.data.result.data.map(api => {
      return {
        id: api.id,
        businessCode: api.businessCode,
        businessName: api.businessName,
        createdUserName: api.createdUserName,
        createdBy: api.createdBy,
      }
    })

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_api_list().then(res => {
  console.log(res.filter(item => item.createdUserName == '许语凡').length)
  console.log(res.filter(item => item.createdUserName == '许语凡'))

})

module.exports = {
  get_api_list,
}