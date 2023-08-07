const http = require('../utils/http')
const { ACCESS_TOKEN, DICTID, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')

// 入参为dictId，若无入参则默认使用环境变量DICTID
const relevance_dictionary = (dictId) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v1/dictionary/${dictId ? dictId : DICTID}`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('关联字典成功')
    console.log(res.data.result)
    return res
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

// relevance_dictionary()

module.exports = {
  relevance_dictionary
}