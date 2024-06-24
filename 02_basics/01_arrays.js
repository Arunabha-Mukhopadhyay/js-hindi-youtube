let arr = [0,1,2,3,4]

const Heros = ["batman", "superman", "saktiman"]
// const arr2 = new Array(1,2,3,4,5)

// console.log(Heros[0])

//Arrays Methods

// arr2.push(8)
// console.log(arr2)

const newArr = arr.join()
console.log(arr)
console.log(newArr);       // string


let na1 = arr.slice(1,3)
console.log(na1)
console.log(arr)

let na2 = arr.splice(1,3)
console.log(na2)    // manipulates original array
console.log(arr)