// const char = '1'
// const unicode = char.charCodeAt(0)
// const binary = unicode.toString(2)
// console.log(binary) // 输出：110001
// console.log(binary.padStart(8, '0')) // 输出：00110001

const char_to_binary = (char = '') => {
  const unicode = char.charCodeAt(0)
  const binary = unicode.toString(2)
  console.log(binary)
  return binary
}
char_to_binary('乘')

/*
在上面的例子中，char 变量包含字符 'a'，charCodeAt(0) 方法可以获取字符 'a' 的 Unicode 编码，返回数值 97，然后我们使用 toString() 方法将这个数值转换为二进制字符串 "1100001"。

需要注意的是，在最终输出的二进制字符串中可能会省略前导的 0，如果需要始终输出指定位数的二进制字符串，请使用 padStart() 方法在前面补充 0，例如：binary.padStart(8, '0') 表示输出 8 位的二进制字符串，不足位数的部分用 0 填充。
*/

module.exports = {
  char_to_binary
}