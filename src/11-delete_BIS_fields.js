const { delete_field } = require('./03-delete_field')
const { get_table_fields } = require('./10-get_table_fields')

// 入参为tableId，若无入参则默认使用环境变量TABLEID
get_table_fields().then(res => {
  let BIS_field_arr = res.filter(item => item.species == 'BIS')
  // console.log(BIS_field_arr[0])
  BIS_field_arr.forEach(item => {
    delete_field(item.id)
  })
})
