const axios = require('axios')

const axios_api = () => axios({
  url: 'http://localhost:8000/test/',
  method: 'get'
})

const exec_axios_api = async () => {
  let res = await axios_api()
  console.log(res)
}

exec_axios_api()