const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, OFFSET, SIZE, APPCODE1 } = require('./config/config.default')

const get_custom_page_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/page/v1/pages?offset=${OFFSET}&size=${SIZE}&totalSize=true`,
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
    console.log('获取自定义页面列表信息成功')
    return res.data.result.data.map(page => {
      return {
        id: page.id,
        name: page.name,
        pageCode: page.pageCode,
        createdUserName: page.createdUserName,
        gmtCreate: page.gmtCreate
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

get_custom_page_list().then(res => {
  console.log(res.filter(item => item.createdUserName == '许语凡' && item.gmtCreate > (new Date('2023-08-02 23:59:59')).getTime()).length)
  console.log(res.filter(item => item.createdUserName == '许语凡' && item.gmtCreate > (new Date('2023-08-02 23:59:59')).getTime()))

})

module.exports = {
  get_custom_page_list,
}