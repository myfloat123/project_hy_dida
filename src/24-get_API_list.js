const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, OFFSET, SIZE, APPCODE1 } = require('./config/config.default')

const get_API_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v1/api-metadata/list?offset=${OFFSET}&size=${SIZE}`,
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
    console.log('获取业务API列表信息成功')
    return res.data.result.data.map(page => {
      return {
        id: page.id,
        createdUserName: page.createdUserName,
        modifiedUserName: page.modifiedUserName,
        gmtCreate: page.gmtCreate,
        gmtModified: page.gmtModified,
        businessCode: page.businessCode,
        businessName: page.businessName,
        moduleId: page.moduleId,
        moduleName: page.moduleName
      }
    })

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})
// let milliseconds = (new Date('2023-06-26')).getTime()
// let date = new Date(milliseconds)
// let formattedDate = date.toISOString().slice(0, 19).replace('T', ' ')  // 格式化日期字符串 'YYYY-MM-DD HH:mm:ss'
// console.log(formattedDate)

get_API_list().then(res => {
  console.log(res.filter(item => item.createdUserName == '许语凡' && item.gmtCreate > (new Date('2023-08-02 23:59:59')).getTime()).length)
  console.log(res.filter(item => item.createdUserName == '许语凡' && item.gmtCreate > (new Date('2023-08-02 23:59:59')).getTime()))

})

module.exports = {
  get_API_list,
}