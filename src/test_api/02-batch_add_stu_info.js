const dataList = require('./data.json')
const { add_test_stu_info } = require('./01-add_test_stu_info')

dataList.forEach(async data => {
  await add_test_stu_info(data)

})