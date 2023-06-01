const { relevance_dictionary } = require('../08-relevance_dictionary')
let dictionaryArr = [
  {
    id: '1660961344301707276',
    createdBy: '1630538547360575491',
    gmtCreate: 1684839018328,
    modifiedBy: '1630538547360575491',
    gmtModified: 1684839018328,
    code: 'dict_education_background_6',
    name: '学历6',
    description: '',
    items: [],
    createdUserName: '20014',
    modifiedUserName: '20014'
  },
  {
    id: '1660961344238792704',
    createdBy: '1630538547360575491',
    gmtCreate: 1684839018325,
    modifiedBy: '1630538547360575491',
    gmtModified: 1684839018325,
    code: 'dict_sex_13',
    name: '性别13',
    description: '',
    items: [],
    createdUserName: '20014',
    modifiedUserName: '20014'
  },
]

let arr = []
arr = dictionaryArr.map(item => {
  return {
    id: item.id,
    name: item.name
  }
})

let reg = /性别/
let is_dict = arr.some(item => {
  console.log('ok')
  if (reg.test(item.name)) {
    console.log(item)
    // let r = await relevance_dictionary(item.id)
    // console.log(r)
    relevance_dictionary(item.id).then(res => {
      console.log(res.data.result)
    })
    return true
  }


})

console.log(arr)
console.log(is_dict)