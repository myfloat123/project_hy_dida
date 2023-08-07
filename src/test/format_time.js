(function (MS) {
  const milliseconds = MS
  const date = new Date(milliseconds)
  // console.log(date)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  console.log(formattedDate)
  return formattedDate
})(1691371260000)