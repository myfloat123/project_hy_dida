const Router = require('koa-router')

const { test, testImport } = require('../controller/test.controller')

const router = new Router({ prefix: '/test' })

router.get('/', test)
router.post('/import', testImport)

module.exports = router