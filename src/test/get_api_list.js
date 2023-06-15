const http = require('../../utils/http')
const { ACCESS_TOKEN, LOGINNAME, OFFSET, SIZE, USERAGENT, XFORWARDEDFOR, APPCODE } = require('../config/config.default')

// ${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}
const get_table_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v1/api-metadata/list?offset=${OFFSET}&size=${SIZE}`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {

    console.log('获取API列表成功')
    // console.log(res.data.result.data)
    let pageList = res.data.result.data.filter(item => item.createdUserName == '许语凡')
    // console.log(pageList.length)
    return res.data.result.data
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_table_list().then(res => {
  console.log(res)
})

module.exports = {
  get_table_list,
}