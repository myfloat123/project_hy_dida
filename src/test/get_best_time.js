const fs = require('fs')
const path = require('path')
const http = require('../../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR } = require('../config/config.default')

const get_best_time = () => http({
  url: `/hy-saas/hy/saas/hy/20014/api/1666401886913310720_list_1686136762189`,
  method: 'post',
  data: { "_page": { "size": 100, "from": 0 } },
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'User-Agent': USERAGENT,
    'X-Forwarded-For': XFORWARDEDFOR
  }
}).then(res => {
  // console.log(res.data.result)
  if (res.data.code == 'SA0000') {
    if (!fs.existsSync(path.join(__dirname, '../public/query_contract_data.json'))) {
      fs.writeFileSync(path.join(__dirname, '../public/query_contract_data.json'), JSON.stringify(res.data.result, '', '\t'), function (err) {
        if (err) return console.log('文件写入失败！' + err.message)
      })
      console.log('文件写入成功！')
    } else {
      fs.writeFile(path.join(__dirname, '../public/query_contract_data.json'), JSON.stringify(res.data.result, '', '\t'), function (err) {
        if (err) return console.log('文件写入失败！' + err.message)
        console.log('文件写入成功！')
      })
    }
    let hr_code = 'QY1111'

    let latestContract = res.data.result.data.filter(item => item.hr_code == hr_code).reduce((prev, current) => {
      let prevDate = new Date(prev.create_time)
      let currentDate = new Date(current.create_time)
      return prevDate > currentDate ? prev : current
    })
    console.log(latestContract)

    return res.data.result
  } else {
    return res.data
  }
}).catch(err => {
  console.log(err)
})

get_best_time()

module.exports = {
  get_best_time
}