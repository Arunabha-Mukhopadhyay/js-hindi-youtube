// Datatypes are categoroised into 2 types based on how they are stored in memory and accessed 
//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// # Primitive datatypes := call by value
//7 types number string null undefined boolean symbol BigInt

//symbol example :
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId); //false

//BigInt example:
const number = 46928461294629424n;


// # Non-Primitive : array objects functions :call by refrerence type

//++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Non-Primitive)
//.Primitive
let name = "arunabha"

let changedName = name
changedName = "Siltu"
console.log(changedName)
console.log(name)

//.Heap
let user1 = {
    email: "user1@google.com"
}
let user2 = user1;
user2.email = "user2@google.com"

console.log(user1.email)
console.log(user2.email);