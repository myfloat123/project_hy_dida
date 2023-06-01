// let reg = /性别$/
let reg = new RegExp('性别' + '$')
let str = '性别12'
let str1 = '性别'
console.log(reg.test(str))
console.log(reg.test(str1))