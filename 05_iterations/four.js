const myObject = {
    'game1': "NFS",
    'game2': "spiderman"
}
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`)
}

const arr = [1,2,3,4, "arunabha"]

for (const key in arr) {
    // console.log(arr[key])
}

const map = new Map()
map.set("Js", "Javascript")
map.set("CPP", "C++")
map.set("Rb", "Ruby")

console.log(map)

// for (const key in map) {
//     console.log(key)
// }