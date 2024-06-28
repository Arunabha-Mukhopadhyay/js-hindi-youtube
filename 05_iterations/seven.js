const myNumbs = [1,2,3,4,5,6,7,8,9,10]

const newarr = []
const result = myNumbs.forEach((items)=>{
   let res = items + 10
   newarr.push(res)
})

console.log(newarr)


// const result = myNumbs.map((num) => {
//     return num + 10
// })

// console.log(result)



// ++++++++++++++++++++++++++++++++++ CHAINING ++++++++++++++++++++++++++++++++

// const newNumbs = myNumbs
//     .map((num) => num * 10)
//     .map((num) => {
//         if (num > 50) {
//             return num
//         } 
//     })
//     .filter((num) => num !== undefined)   



// const newNumbs = myNumbs
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 50 )
 
// console.log(newNumbs)    
    

