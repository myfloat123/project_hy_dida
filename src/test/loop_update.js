let arr = [
  { sales_director: 'GC0002', phone: '15768990709', batch_code: '1' },
  { sales_director: 'GC0007', phone: '13569998565', batch_code: '1' },
  { sales_director: 'GC0001', phone: '18985651256', batch_code: '1' }
]

for (let i = 0; i < arr.length; i++) {
  if (arr[i].sales_director != 'GC0007') {
    arr[i].phone = '***********'
  }
}

console.log(arr)