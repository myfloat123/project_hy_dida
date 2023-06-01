class TestController {
  async test(ctx) {
    console.log(ctx)
    ctx.body = {
      code: 0,
      message: '测试成功',
      result: ''
    }
  }
}

module.exports = new TestController()