// let reg = /性别$/
let nameStr = '任务(潜客)(商机)状态'
nameStr = nameStr.replace(/\(/g, '\\(').replace(/\)/g, '\\)')
// console.log(nameStr)
let reg = new RegExp(`${nameStr}$`)
console.log(reg)
let str = `任务(潜客)(商机)状态`
// console.log(reg.test(str))
// console.log('\(')
// console.log('\\(')
// console.log('\\\\(')

let reg1 = /^[\u4e00-\u9fa5A-Z]{1}[A-HJ-NP-Za-hj-np-z]{1}[A-Za-z0-9]{5}$/
let busCode = '粤AT108H'
let busCode1 = 'AAT108H'
console.log(reg1.test(busCode))
console.log(reg1.test(busCode1))
console.log(busCode1.substring(2))