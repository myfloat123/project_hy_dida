let timeList = [
  "2023-06-07 19:22:34.000",
  "2023-06-07 19:24:27.000"
]

timeList.forEach((item, i, arr) => {
  arr[i] = new Date(item).getTime()
})
console.log(timeList)
console.log(Math.max(...timeList))