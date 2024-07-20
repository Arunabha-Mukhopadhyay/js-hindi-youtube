const map = new Map()

map.set("city", " roorkee")
map.set("city2", "pune")
map.set("city3", "bangkok")

// console.log(map)

const newarr = []
map.forEach((values, items) =>{
  const res = (`${items}: ${values}`)
  // console.log(res)
  return newarr.push(res)
})
// console.log(newarr)

const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
