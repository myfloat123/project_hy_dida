let obj = {
  name: 'Alice',
  age: 25,
  friends: ['Bob', 'Carol'],
  greet: function () {
    console.log('Hello,' + this.name)
  }
}
console.log(obj?.name) // Alice 
console.log(obj?.friends[1]) // Carol 
obj?.greet?.()  // Hello, Alice
// console.log(obj.name = 'Bob')

// 可选链不能用于赋值左边
// obj?.name = 'Bob' // 抛出语法错误

let obj1 = null
let prop = obj1?.name
let prop1 = obj1.name
console.log(prop)
console.log(prop1)