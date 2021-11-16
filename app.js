const a = 123
console.log(a)

const obj = {m: 'foo', n: 'bar'}
const {m: x, n: y} = obj
console.log(x, y)

const f = function(num) {
  const sum = a + num
  return sum
}
console.log(f(1))