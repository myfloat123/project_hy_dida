const http = require('../utils/http')
const { ACCESS_TOKEN, TABLEID, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')

const delete_one_table = (tableId) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v2/tables/${tableId ? tableId : TABLEID}`,
  method: 'delete',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('删除表成功')
  } else {
    console.log(res.data.msg)
  }
}).catch(err => {
  console.log(err)
})

delete_one_table('1686695705927888896')

module.exports = {
  delete_one_table
}