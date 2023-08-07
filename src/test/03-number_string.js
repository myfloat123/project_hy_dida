const str1 = '性别13'
const str2 = '性别12'
let arr1 = str1.split('')
console.log(arr1)
let arr2 = []
arr1.forEach((item, i) => {
  // console.log(str2.indexOf(item))
  // console.log(typeof +item)
  // console.log(+item)
  if (isNaN(+item)) {
    arr2.push(item)
  }
  // console.log(Object.prototype.toString.call(+item))
  // if (Object.prototype.toString.call()) {
  //   console.log(+item)
  // }
})
console.log(arr2)
console.log(arr2.join(''));

