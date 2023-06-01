const http = require('../utils/http')
const { ACCESS_TOKEN, FIELD_ID, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')

// 入参为fieldId，若无入参则默认使用环境变量FIELD_ID
const delete_field = (fieldId) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v2/fields/${fieldId ? fieldId : FIELD_ID}`,
  method: 'delete',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log(`删除字段成功`)
  } else {
    console.log(res.data.msg)
  }
}).catch(err => {
  console.log(err)
})

// delete_field('1661676665996193792')

module.exports = {
  delete_field
}