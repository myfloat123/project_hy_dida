const Router = require('koa-router')

const { lead } = require('../controller/import.controller')

const router = new Router({ prefix: '/api' })

router.post('/import', lead)

module.exports = router