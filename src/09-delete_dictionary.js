const http = require('../utils/http')
const { ACCESS_TOKEN, DICTID, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')

const delete_dictionary = (dictId) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v1/dictionary/${dictId ? dictId : DICTID}`,
  method: 'delete',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('删除字典成功')
  } else {
    console.log(res.data.msg)
  }
}).catch(err => {
  console.log(err)
})

// delete_dictionary('1661257580787412992')

module.exports = {
  delete_dictionary
}