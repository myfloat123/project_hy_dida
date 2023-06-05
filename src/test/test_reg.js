// let reg = /性别$/
let nameStr = '任务(潜客)(商机)状态'
nameStr = nameStr.replace(/\(/g, '\\(').replace(/\)/g, '\\)')
console.log(nameStr)
let reg = new RegExp(`${nameStr}$`)
console.log(reg)
let str = `任务(潜客)(商机)状态`
console.log(reg.test(str))
// console.log('\(')
// console.log('\\(')
// console.log('\\\\(')