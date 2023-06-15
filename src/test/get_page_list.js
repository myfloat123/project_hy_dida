const http = require('../../utils/http')
const { ACCESS_TOKEN, LOGINNAME, OFFSET, SIZE, USERAGENT, XFORWARDEDFOR, APPCODE } = require('../config/config.default')

// ${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}
const get_table_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${APPCODE}/page/v1/pages?offset=${OFFSET}&size=${SIZE}&totalSize=true`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {

    console.log('获取页面列表成功')
    // console.log(res.data.result.data)
    let pageList = res.data.result.data.filter(item => item.createdUserName == '许语凡')
    // console.log(pageList.length)
    return pageList
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_table_list().then(res => {
  // let res1 = res.map(item => {
  //   return {
  //     id: item.id,
  //     name: item.name,
  //     belongMenus: item.belongMenus
  //   }
  // })
  // console.log(res1)
  console.log(res.length)
})

module.exports = {
  get_table_list,
}