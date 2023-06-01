const http = require('../../utils/http')

const test_api = () => http({
  url: `http://localhost:8000/test/`,
  method: 'get'
}).then(res => {
  return res.data
}).catch(err => {
  return err
})


let exec = async () => {
  let res = await test_api()
  console.log(res)
}

exec()

module.exports = {
  test_api
}