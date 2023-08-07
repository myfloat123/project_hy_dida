// var s1 = "\\u9fa5"
// // console.log(s1.substr(2))
// var ch = String.fromCharCode(parseInt(s1.substr(2), 16))
// console.log(ch)

const unicode_to_chinese = (unicodeStr) => {
  // let ch = String.fromCharCode(parseInt(unicodeStr.substr(2), 16))
  // 解码
  let ch = unescape(unicodeStr.replace(/\\/g, "%"))
  console.log(ch)
  return ch
}

unicode_to_chinese('\\u4e00')

module.exports = {
  unicode_to_chinese
}