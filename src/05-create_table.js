let data_table = require('./public/data_table.json')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, NAME, CODE, MODULEID, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')

data_table.name = NAME
data_table.code = CODE
data_table.moduleId = MODULEID

http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v2/tables/`,
  method: 'post',
  data: data_table,
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('建表成功')
    console.log('tableId:', res.data.result)
  } else {
    console.log(res.data.msg)
  }
}).catch(err => {
  console.log(err)
})