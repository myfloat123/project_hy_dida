let data_aux_table = require('./public/data_aux_table.json')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, NAME, CODE, MODULEID, USERAGENT, XFORWARDEDFOR, APPCODE, MAINTABLECODE, RELATIONTYPE } = require('./config/config.default')
// const {get_quote_table_list} = require('./14-get_quote_table_list')
// const exec = async () => {
//   let res = await get_quote_table_list()
//   res.find(item => item.code == MAINTABLECODE)
// }

// exec()

data_aux_table.name = NAME
data_aux_table.code = CODE
data_aux_table.moduleId = MODULEID
data_aux_table.auxTable.mainTableCode = MAINTABLECODE
data_aux_table.auxTable.relationType = RELATIONTYPE

http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v2/tables/`,
  method: 'post',
  data: data_aux_table,
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('建立附属表成功')
    console.log('tableId:', res.data.result)
  } else {
    console.log(res.data.msg)
  }
}).catch(err => {
  console.log(err)
})