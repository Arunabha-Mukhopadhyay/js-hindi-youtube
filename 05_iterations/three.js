// for of:

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const name = "arunabha mukhpopadhyay"
for (const val of name) {
    if(val == " "){
        continue
    }
    // console.log(`each character is ${val}`)
}


// Maps : 

const  map = new Map()
map.set("IN", "India")
map.set("US", "United States Of America")
map.set("Fr", "France")

console.log(map)

for (const [key,value] of map) {
    console.log(value)        // retruns in form of array if only keys
}

const myObject = {
    'game1': "NFS",
    'game2': "spiderman"
}
// for (const val of myObject) {        // not itterable
//     console.log(val)
// }