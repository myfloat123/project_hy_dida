const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, TABLEID, USERAGENT, XFORWARDEDFOR, OFFSET, SIZE, APPCODE } = require('./config/config.default')

// 入参为tableId，若无入参则默认使用环境变量TABLEID
const get_one_dictionary = (name) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v1/dictionary/list?offset=${OFFSET}&size=${SIZE}&name=${name}`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {

    console.log('获取字典成功')
    // console.log(res.data.result)
    return res.data.result
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

// get_one_dictionary('性别').then(res => {
//   console.log(res)
//   let dictionary_name_arr = res.data.map((item) => {
//     return {
//       id: item.id,
//       name: item.name,
//       code: item.code,
//     }
//   })
//   console.log(dictionary_name_arr)
//   console.log(dictionary_name_arr[0])
// })

module.exports = {
  get_one_dictionary,
}