const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, OFFSET, SIZE, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')

const get_one_table = (tableName = '') => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v2/tables/list?offset=${OFFSET}&size=${SIZE}&name=${tableName}&excludeTableTypes=SUPER`,
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
    console.log('获取表信息成功')
    let tableList = res.data.result.data.map(item => {
      return {
        id: item.id,
        name: item.name,
        code: item.code,
        moduleId: item.moduleId,
        moduleName: item.moduleName,
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

get_one_table('车辆信息表1').then(res => {
  console.log(res)
})

module.exports = {
  get_one_table,
}