// let data_normal = require('./public/data_normal.json')
// let data_dict = require('./public/data_dict.json')
// let data_quote = require('./public/data_quote.json')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')
// let data = {
//   "dataType": "NORMAL",
//   "fieldType": "STRING",
//   "name": "成绩",
//   "code": "stu_score",
//   "fieldProperty": {
//     "required": "false",
//     "unique": "false",
//     "pinyinConvent": "false",
//     "regular": "",
//     "defaults": null
//   },
//   "tags": null,
//   "fieldSize": 32,
//   "decimalSize": null,
//   "species": "BIS",
//   "tableId": "1659989626624028672",
//   "fieldPropertyDTOList": [
//     {
//       "value": "false",
//       "code": "required"
//     },
//     {
//       "value": "false",
//       "code": "unique"
//     },
//     {
//       "value": "false",
//       "code": "pinyinConvent"
//     },
//     {
//       "value": "",
//       "code": "regular"
//     },
//     {
//       "value": null,
//       "code": "defaults"
//     }
//   ]
// }

const _http = http


const add_field = (data) => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/data/v2/fields/`,
  method: 'post',
  data,
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then((res) => {
  console.log(`新增字段"${data.name}"成功`)
  console.log('字段id:', res.data.result)
  console.log('\n')
  // console.log(res.data)
}).catch(err => {
  console.log(err)
  // console.log(_http)
})

// add_field(data_normal)

module.exports = {
  add_field
}