const axios = require('axios')

const addBook = () => axios({
  url: 'http://www.liulongbin.top:3006/api/addbook',
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {
    bookname: '水浒传',
    author: '施耐庵',
    publisher: '上海图书出版社'
  }
}).then(res => {
  console.log(res)
  return res
}).catch(err => {
  console.log(err)
  return err
})

const getBooks = () => axios({
  url: 'http://www.liulongbin.top:3006/api/getbooks',
  method: 'get'
}).then(res => {
  console.log(res)
  return res
}).catch(err => {
  console.log(err)
  return err
})

getBooks()