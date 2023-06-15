// var s3 = '我喜欢你'
// var u = ''
// for (var i = 0; i < s3.length; i++) {
//   u += '\\u' + s3.charCodeAt(i).toString(16)
// }
// console.log(u)

const chinese_to_unicode = (chineseStr) => {
  var u = ''
  for (var i = 0; i < chineseStr.length; i++) {
    u += '\\u' + chineseStr.charCodeAt(i).toString(16)
  }
  console.log(u)
  return u
}

chinese_to_unicode('我喜欢你')

module.exports = {
  chinese_to_unicode
}