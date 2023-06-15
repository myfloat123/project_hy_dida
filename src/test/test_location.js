let url = 'http://training-dida.haoyuntech.com/hy-paas/paas/hy/20014/data/v1/dictionary/list?offset=0&size=100'

let arr1 = url.split('?') /*
[
  'http://training-dida.haoyuntech.com/hy-paas/paas/hy/20014/data/v1/dictionary/list',
  'offset=0&size=100'
]
*/
let a1 = arr1[1] // offset=0&size=100
let arr2 = a1.split('&') // [ 'offset=0', 'size=100' ]
// console.log(arr1)
// console.log(a1)
// console.log(arr2)
arr2.forEach((item, i, arr2) => {

  arr2.splice(i, 1, item.split('='))
})
/* [ [ 'offset', '0' ], [ 'size', '100' ] ] */
console.log(arr2)
let obj2 = Object.fromEntries(arr2)
console.log(obj2)
