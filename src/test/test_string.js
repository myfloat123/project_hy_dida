// let role_name = '普通用户,维修销售员,系统管理员'
// let num
// num = role_name.indexOf('维修销售员')
// // console.log(num)
// let str1 = '5.56%'
// let str2 = '11.11%'
// console.log(str1.slice(0, -1))
// console.log(str2.slice(0, -1))
// console.log(+str1.slice(0, -1) > +str2.slice(0, -1))
let reg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$|(^((13[0-9])|(17[0-1,6-8])|(15[^4,\D])|(18[0-9]))\d{8}$)/
let str = 'v15768990393'
console.log(reg.test(str))