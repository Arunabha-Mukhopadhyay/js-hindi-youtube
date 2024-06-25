// Singleton : agar constructor se banega toh hamesha singleton se banega

// Object literals:

const mySym = Symbol("myKey1")

const jsUser = {
    name : "arunabha",
    "fullName": "arunaha-mukhopadhyay",
    [mySym]: "keyss2",
    age: 18,
    location: "Roorkee",
    isLoggedIn: false,
    lastLoginDays: ["mon","thur","sat","sun"]
}
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(typeof(jsUser.mySym))
// console.log((jsUser[mySym]))

jsUser.name = "arunabha.muk"
// Object.freeze(jsUser)
// jsUser.name = "arunabha.."

jsUser.greetings = function(){
    console.log("grreetings ji")
}
console.log(jsUser.greetings())

jsUser.greeting2 = function(){
    console.log(`hello ${this["fullName"]} ! how are you?`)
}
console.log(jsUser.greeting2())
console.log(jsUser)