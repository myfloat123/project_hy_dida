const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, OFFSET, SIZE } = require('./config/config.default')

const get_customization_page_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/page/code/v1/search`,
  method: 'post',
  data: { "offset": OFFSET, "size": SIZE },
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
        pageName: page.pageName,
        pathParam: page.pathParam,
        pathType: page.pathType,
        postMessageTemplate: page.postMessageTemplate,
        topic: page.topic,
        urlTemplate: page.urlTemplate
      }
    })

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_customization_page_list().then(res => {
  console.log(res)

})

module.exports = {
  get_customization_page_list,
}