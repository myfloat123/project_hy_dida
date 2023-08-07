// let pattern = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$|(^((13[0-9])|(17[0-1,6-8])|(15[^4,\D])|(18[0-9]))\d{8}$)/
// 不能输入中文，长度限制在30位
// let pattern = /^[^\u4e00-\u9fa5]{1,30}$/
// let pattern = /^.{1,30}$/
let pattern = /^[^\u4e00-\u9fa5]*$/
let phone = `false`
let result = pattern.test(phone)
console.log(result)



// (function () {
//   let role_ids = ['1676896098234404865', '1676896366095241217', '1676896462778142721', '1681204284969975809']
//   let role_id = ['1676896098234404865', '1676896366095241217']
//   let result = null
//   result = role_id.some((item) => {
//     if (role_ids.includes(item)) {
//       return true
//     }
//   })
//   console.log(!result)
//   return !result
// })()

// (function () {
//   let role_ids = ['1676896098234404865', '1676896462778142721', '1681204284969975809']
//   let role_id = ['1676896296100696065', '1676896366095241217']
//   let result = null
//   result = role_id.some((item) => {
//     if (role_ids.includes(item)) {
//       return true
//     }
//   })
//   return !result
// })()

// (function () {
//   let follow_result = ['3', '4', '6', '7', '8', '10', '11', '12', '14', '15']
//   let result = !follow_result.includes('1')
//   return result
// })()