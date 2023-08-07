(function () {
  let str = `{"hr_name":"广昌吴海杰"},{"hr_name":"广昌胡惠清"},{"hr_name":"广昌许语凡"}`
  let jsonArray = str.split(',')
  let nameArr = []
  for (var i = 0; i < jsonArray.length; i++) {
    var jsonObj = JSON.parse(jsonArray[i])
    var hrName = jsonObj.hr_name
    nameArr.push(hrName)
  }
  console.log(nameArr.join(','))
  return nameArr.join(',')
})()