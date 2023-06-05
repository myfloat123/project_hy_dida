let dictionary_name_arr = [
  {
    id: '1665559432886628352',
    name: '任务(潜客)(商机)状态',
    code: 'dict_dc_status1'
  }
]

let name1 = '任务(潜客)(商机)状态'
let nameArr = name1.split('')
let nameStr = nameArr.join('')
let nameStr1 = ''
if (nameArr.includes('(') || nameArr.includes(')')) {
  nameStr1 = nameStr.replace(/\(/g, '\\(').replace(/\)/g, '\\)')
  // console.log(nameStr1)
} else {
  nameStr1 = nameStr
}

let reg = new RegExp(`${nameStr1}$`)

let is_dictionary
is_dictionary = dictionary_name_arr.some(item => {
  if (reg.test(item.name)) {
    console.log("执行关联字典")
    dictId = item.id
    // console.log(item.name)
    // console.log(dictId)
    return true
  }
})

console.log(is_dictionary)