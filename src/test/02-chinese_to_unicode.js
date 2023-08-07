// var s3 = '我喜欢你'
// var u = ''
// for (var i = 0; i < s3.length; i++) {
//   u += '\\u' + s3.charCodeAt(i).toString(16)
// }
// console.log(u)

const chinese_to_unicode = (chineseStr) => {
  var u = ''
  for (var i = 0; i < chineseStr.length; i++) {
    // console.log(chineseStr.charCodeAt(i)) // 转换为ASCII码
    u += '\\u' + chineseStr.charCodeAt(i).toString(16)
  }
  console.log(u)
  return u
}

// chinese_to_unicode('A')
chinese_to_unicode('一')

module.exports = {
  chinese_to_unicode
}