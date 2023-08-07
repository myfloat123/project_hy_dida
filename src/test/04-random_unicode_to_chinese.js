// let unicodeStr = '\\u' + Math.random().toString(16).slice(2, 6).padEnd(4, '0')
// console.log(unicodeStr)

// 生成当个随机unicode编码
function randomUnicode() {
  console.log(Math.random().toString(16).slice(2, 6))
  return '\\u' + Math.random().toString(16).slice(2, 6).padEnd(4, '0')
}

// 生成多个unicode编码并拼接为字符串
function moreUnicode() {
  let num = Math.ceil(Math.random() * 10)
  // console.log(num)
  let u = ''
  for (let i = 0; i < num; i++) {
    u += randomUnicode()
  }
  return u
}
let unicodeStr = moreUnicode()

// unicode编码转中文
function unicode_to_chinese(unicodeStr) {
  let ch = unescape(unicodeStr.replace(/\\/g, "%"))
  console.log(ch)
  return ch
}

unicode_to_chinese(unicodeStr)