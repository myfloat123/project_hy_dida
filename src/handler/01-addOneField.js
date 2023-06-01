const data_normal = require('../public/data_normal.json')
const { add_field } = require('.././02-add_field')
data_normal.name = '成绩1'
data_normal.code = 'score1'
// console.log(data_normal)
add_field(data_normal)