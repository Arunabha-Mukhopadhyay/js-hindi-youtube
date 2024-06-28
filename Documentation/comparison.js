// (!==) strictly checks whether two operands are not equal returning a boolean result . always considers operands of different types to be different.
// (===) also strictly checks whether equal or not . also always considers different operants to be different.
// (== & ===) difference is that the (==) operator convert them to same datatype before comparing.

// example
let a = 22
let b = "22"
// console.log(a === b)    // false
// console.log(a !== b)    // true
// console.log(a == b)     // true



//+++++++++++++++++++

// const always need an initializer
//global object is window

// fromCharCode() : returns a string  which is created from sequence of unicode code points based on UTF-16( character encoding ascii values) but not supplementary character
// fromCodePoint() : returns a atring created from sequence of unicode code points including the supplementary characters

// String.fromCharCode(65, 66, 67); // returns "ABC"
// console.log(String.fromCharCode(0x2014)); // returns "—"
// console.log(String.fromCharCode(0x12014)); // also returns "—"; 

// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"


// tosplice() : method of array to add replace or delete without mutating the original array.

