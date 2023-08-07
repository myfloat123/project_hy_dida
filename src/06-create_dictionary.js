let data_dictionary = require('./public/data_dictionary.json')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, DICTNAME, DICTCODE, USERAGENT, XFORWARDEDFOR, APPCODE, APPCODE1 } = require('./config/config.default')
data_dictionary.name = DICTNAME
data_dictionary.code = DICTCODE

const create_dictionary = (data_dictionary) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : APPCODE1}/data/v1/dictionary/`,
  method: 'post',
  data: data_dictionary,
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('新增字典成功')
    console.log('字典id:', res.data.result)
    console.log('字典编码:', 'dict_' + data_dictionary.code)
    console.log(res.data)
    return res
  } else {
    console.log(res.data.msg)
    return res.data
  }
}).catch(err => {
  console.log(err)
})

// create_dictionary(data_dictionary)

module.exports = {
  create_dictionary,
  data_dictionary
}