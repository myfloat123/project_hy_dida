const Router = require('koa-router')

const { test, testImport, testPost } = require('../controller/test.controller')

const router = new Router({ prefix: '/test' })

router.get('/', test)
router.post('/import', testImport)
router.post('/post', testPost)

module.exports = router