const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')

const get_one_quote_table = (tableName = '') => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v2/tables/list?name=${tableName}&excludeTableTypes=DICT`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {

    console.log('获取引用表成功')
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

get_one_quote_table('车辆配置信息表').then(res => {
  console.log(res)
})

module.exports = {
  get_one_quote_table,
}