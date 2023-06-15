const Router = require('koa-router')

const { lead, insert } = require('../controller/import.controller')

const router = new Router({ prefix: '/api' })

router.post('/import', lead)
router.post('/insert', insert)

module.exports = router