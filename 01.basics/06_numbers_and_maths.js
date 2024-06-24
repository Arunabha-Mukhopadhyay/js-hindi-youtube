const score = 100
// console.log(score)

const age = new Number(19)
// console.log(age)
// console.log(age.toString().length)

let price = 230
console.log(price.toFixed(2))  //string

let otherNumber = 123.473
// console.log(otherNumber.toPrecision(4))  //string

const numbdr = 24682335
// console.log(numbdr.toLocaleString('en-IN'))


//++++++++++++++ MATHS ++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(7.5));
// console.log(Math.ceil(4.3));    // 5
// console.log(Math.floor(4.9))   // 4
// console.log(Math.max(2,3,49,1))    // 49
// console.log(Math.pow(3,4))


console.log(Math.random()) // values between 0-1
console.log((Math.random()*10) + 1)  
console.log(Math.floor(Math.random()*10) + 1)

let max = 20
let min = 10
console.log(Math.floor(Math.random()*( max - min + 1 )) + min)  // + 1 to avoid zero case