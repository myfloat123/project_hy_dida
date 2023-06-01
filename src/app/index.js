const path = require('path')

const Koa = require('koa')
const { koaBody } = require('koa-body')
const KoaStatic = require('koa-static')

const app = new Koa()

const cors = require('@koa/cors')
app.use(cors())

const router = require('../router')

app.use(
  koaBody({
    multipart: true,
    formidable: {
      // 在配置选项option里，不推荐使用相对路径
      // 在option里的相对路径，不是相对的当前文件，相对process.cwd()  也就是D:\Code\Node.js\koa_api
      // uploadDir: './src/uploads',
      uploadDir: path.join(__dirname, '../uploads'),
      keepExtensions: true
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE']
  })
)

app.use(KoaStatic(path.join(__dirname, '../uploads')))

app.use(router.routes()).use(router.allowedMethods())

module.exports = app