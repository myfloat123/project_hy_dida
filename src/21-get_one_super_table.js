const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, OFFSET, SIZE, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')

const get_one_super_table = (tableName = '') => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v1/superTables/list?offset=${OFFSET}&size=${SIZE}&name=${tableName}`,
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
    console.log('获取超级表信息成功')
    let tableList = res.data.result.data.map(item => {
      return {
        id: item.id,
        appCode: item.appCode,
        appName: item.appName,
        tableId: item.tableId,
        moduleName: item.moduleName,
        mappingTableName: item.mappingTableName,
        mappingTableCode: item.mappingTableCode,
        type: item.type
      }
    })
    return tableList

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_one_super_table('车辆品牌信息表').then(res => {
  console.log(res)
})

module.exports = {
  get_one_super_table,
}