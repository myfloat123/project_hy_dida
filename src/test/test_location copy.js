let url = 'http://training-dida.haoyuntech.com/hy-paas/paas/hy/20014/data/v1/dictionary/list?offset=0&size=100'

// let arr1 = url.split('?')[1].split('&')
// console.log(arr1)
// let arr2 = arr1.map((item, i, arr) => {
//   arr.splice(i, 1, item.split('='))
//   return arr[i]
// })
// console.log(arr2)

// let obj1 = Object.fromEntries(arr2)
// console.log(obj1)

// console.log(Object.fromEntries(url.split('?')[1].split('&').map((item, i, arr) => {
//   // arr.splice(i, 1, item.split('='))
//   // return arr[i]
//   return item.split('=')
// })))

console.log(Object.fromEntries(url.split('?')[1].split('&').map(item => item.split('='))))

console.log(url.split('?')[1].split('&'))
