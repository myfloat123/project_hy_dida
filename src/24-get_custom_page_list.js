const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, OFFSET, SIZE } = require('./config/config.default')

const get_custom_page_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/page/v1/pages?offset=${OFFSET}&size=${SIZE}&totalSize=true`,
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
        pageCode: page.pageCode
      }
    })

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_custom_page_list().then(res => {
  console.log(res)

})

module.exports = {
  get_custom_page_list,
}