const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, OFFSET, SIZE, APPCODE1 } = require('./config/config.default')

const get_one_page = ({ type, name, pageIds }) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/page/v1/pages?offset=${OFFSET}&size=${SIZE}&type=${type ? type : ''}&name=${name ? name : ''}&totalSize=true&pageIds=${pageIds ? pageIds : ''}`,
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
    console.log('获取页面信息成功')
    return res.data.result.data.map(page => {
      return {
        id: page.id,
        name: page.name,
        type: page.type,
        pageCode: page.pageCode,
        belongMenus: page.belongMenus
      }
    })

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_one_page({
  name: '学生信息录入页面',
  pageIds: '',
  type: ''
}).then(res => {
  console.log(res)

})

module.exports = {
  get_one_page,
}