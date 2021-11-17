const value = (() =>
(() => 0
)()
)()
console.log(value)
const zero = () => 0

const zerozero = () => () => 0

console.log(zerozero()())




const multiplyBy = (x) => (y) => x * y 

const multiplyByThree = multiplyBy(3)

console.log(multiplyByThree(4))

const log = (val) => console.log(val) 

log(zerozero()())