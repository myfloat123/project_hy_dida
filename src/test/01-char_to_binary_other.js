var s = "A"
var buffer = new ArrayBuffer(1) // 创建一个1字节的缓冲区
var view = new DataView(buffer) // 创建一个视图
view.setUint8(0, s.charCodeAt(0)) // 将字符的编码写入缓冲区
var b = ""
for (var i = 0; i < buffer.byteLength; i++) {
  b += view.getUint8(i).toString(2).padStart(8, "0") // 从缓冲区读取每个字节，并转换为二进制字符串
}
console.log(b) // 输出"01000001"
