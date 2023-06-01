const Router = require('koa-router')

const { test } = require('../controller/test.controller')

const router = new Router({ prefix: '/test' })

router.get('/', test)

module.exports = router