const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, OFFSET, SIZE, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')

const get_dictionary_list = () => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v1/dictionary/list?offset=${OFFSET}&size=${SIZE}`,
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data)
  if (res.data.code === '00000') {
    console.log('获取字典列表成功')
    // console.log(res.data.result)
    return res.data.result
  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

// get_dictionary_list().then(res => {
//   // console.log(res.data)
//   console.log(res.data.map(item => {
//     return {
//       id: item.id,
//       name: item.name,
//       code: item.code
//     }
//   }))
// })


module.exports = {
  get_dictionary_list
}