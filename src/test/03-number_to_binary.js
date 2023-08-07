// let number = 1
// let binary = number.toString(2)
// console.log(binary)
// console.log(binary.padStart(8, '0'))

const number_to_binary = (number) => {
  let binary = number.toString(2)
  console.log(binary)
  // console.log(binary.padStart(8, '0'))
  return binary
}

number_to_binary(123)

module.exports = {
  number_to_binary
}