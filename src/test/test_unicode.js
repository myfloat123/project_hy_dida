var s = "\\u9fa5"
// console.log(s.replace(/\\/g, "%"))
var ch = unescape(s.replace(/\\/g, "%")) // 解码
console.log(ch) // 输出"龥"

var s1 = "\\u9fa5"
// console.log(s1.substr(2))
var ch = String.fromCharCode(parseInt(s1.substr(2), 16))
console.log(ch) // 输出"龥"

var s2 = '龥'
var u = escape(s2) // 编码
console.log(u)

var s3 = '我喜欢你'
var u = ''
for (var i = 0; i < s3.length; i++) {
  u += '\\u' + s3.charCodeAt(i).toString(16)
}
console.log(u)