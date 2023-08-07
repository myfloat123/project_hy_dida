// 以下列出 ?=、?<=、?!、?<! 的使用区别

// exp1(?=exp2)：查找 exp2 前面的 exp1
let pattern = /runoob(?=[\d+])/
let str = '123runoob123runoob'
console.log(str.match(pattern))

// (?<=exp2)exp1：查找 exp2 后面的 exp1
let pattern1 = /(?<=[\d+])runoob/
let str2 = '123runoob123runoob'
console.log(str2.match(pattern1))

// exp1(?!exp2)：查找后面不是 exp2 的 exp1
let pattern2 = /runoob(?![\d+])/
let str3 = 'runoob123runoobgoogle'
console.log(str3.match(pattern2))

// (?<!exp2)exp1：查找前面不是 exp2 的 exp1
let pattern3 = /(?<![\d+])runoob/
let str4 = '123runoobgooglerunoob'
console.log(str4.match(pattern3))