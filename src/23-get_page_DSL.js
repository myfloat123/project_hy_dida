const fs = require('fs')
const path = require('path')
const http = require('../utils/http')
const { ACCESS_TOKEN, LOGINNAME, USERAGENT, XFORWARDEDFOR, APPCODE } = require('./config/config.default')

const get_page_DSL = (pageID = '') => http({
  url: `${isNaN(+LOGINNAME) ? '' : '/hy-paas'}/paas/hy/${isNaN(+LOGINNAME) ? APPCODE : LOGINNAME}/page/v1/pages/${pageID}`,
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
    console.log('获取页面配置信息成功')
    return res.data.result

  } else {
    console.log(res.data.msg)
    return res.data.msg
  }
}).catch(err => {
  console.log(err)
})

get_page_DSL('1637007928395444224').then(res => {
  // console.log(res)
  // console.log(res.pageContent)
  let pageDSL = res.pageContent
  let dirPath = './public/page_DSL.json'
  if (!fs.existsSync(path.join(__dirname, dirPath))) {
    fs.mkdirSync(path.join(__dirname, dirPath))
  }

  fs.writeFile(path.join(__dirname, dirPath), JSON.stringify(JSON.parse(pageDSL), null, '\t'), (err) => {
    if (err) {
      return console.log('写入文件失败！' + err.message)
    }
    console.log('写入文件成功！')
    console.log(`当前工作目录js文件位于绝对路径 ${__filename}`)
    console.log(`${path.basename(dirPath)}文件位于绝对路径 ${path.resolve(path.join(__dirname, dirPath))}`)
    console.log(`${path.basename(dirPath)}文件位于相对路径 ${path.relative(__filename, path.resolve(path.join(__dirname, dirPath)))}`)

  })
})

module.exports = {
  get_page_DSL,
}