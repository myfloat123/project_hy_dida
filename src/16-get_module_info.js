const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, MODULENAME, APPCODE } = require('./config/config.default')

// 入参为moduleName，若无入参则默认使用环境变量MODULENAME
const get_module_info = (moduleName = MODULENAME) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/page/v1/menus/list`,
  // url: `/paas/hy/asset/page/v1/menus/list`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('获取模块列表信息成功')
    // console.log(res.data.result)
    let moduleList = res.data.result
    let moduleInfo = moduleList.find(item => item.name == moduleName)
    // console.log(moduleInfo)
    if (moduleInfo != undefined) {
      let moduleInfoObj = {
        id: moduleInfo.id,
        name: moduleInfo.name,
        level: moduleInfo.level
      }
      console.log(moduleInfoObj)
    } else {
      console.log('当前搜索模块不存在，请更改正确的入参')
    }
  } else {
    console.log(res)
    console.log(res.data.msg)
  }
}).catch(err => {
  console.log(err)
})

get_module_info('测试')
// get_module_info('中介配置考核')
// get_module_info('潜客管理')

module.exports = {
  get_module_info
}