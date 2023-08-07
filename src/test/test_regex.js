let pattern = /\bCha/
let pattern1 = /ter\b/
// 下面的表达式匹配 Chapter 中的字符串 apt，但不匹配 aptitude 中的字符串 apt
let pattern2 = /\Bapt/
let str = 'Chapter'
let str2 = 'aptiude'
// console.log(str.match(pattern))
console.log(pattern.exec(str))
console.log(pattern1.exec(str))
console.log(pattern2.exec(str))
console.log(pattern2.exec(str2))