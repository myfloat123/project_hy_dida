const fs = require('fs')
const path = require('path')

let dirPath = '../public/page_DSL.json'

// 路径末尾的文件名
console.log(path.basename(dirPath))

// 当前文件所在的绝对位置
console.log(__filename)

// 绝对路径
console.log(path.resolve(path.join(__dirname, dirPath)))

// 相对路径
console.log(path.relative(__filename, path.resolve(path.join(__dirname, dirPath))))

// console.log(__dirname)