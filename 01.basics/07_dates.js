let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString())

// let anotherDate = new Date(2024,1,6)
let anotherDate = new Date("01-14-2024")
console.log(anotherDate.toLocaleString());
console.log(anotherDate.toDateString())

let timestamp =  Date.now()
// console.log(timestamp)
// console.log(anotherDate.getTime())

console.log(Math.floor(Date.now()/1000))        // millisecond to seconds

const newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())      // 1 => monday

newDate.toLocaleString('default',{
    weekday:"long",
    
})