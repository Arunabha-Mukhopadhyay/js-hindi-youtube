// const score = 200;
// if(score > 100) {
//     const power = "fly"
//     console.log(`power is ${power}`)
// }
// console.log(`user power: ${power}`)


const balance = 1000

// if(balance < 500)  console.log("less than 500");

// if(balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750")
// } else{
//     console.log("balance is max at 1000")
// }

const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail  = true

if(loggedInFromEmail && debitCard && 2 === "2"){
    console.log(`allowed to shopping items.`)
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`you are logged in`)
}

// Nullish Coalescing operator (??): null and undefined

let val1;
// val1 = 5 ?? 10       // 5
// val1 = null ?? 4     // 4
// val1 = undefined ?? 2   //  2
val1 = true ?? 7
console.log(val1)

// Ternary Operator
const IceteaPrice = 100
IceteaPrice >= 80 ? console.log(`greater than 80`):console.log(`less than 80`)