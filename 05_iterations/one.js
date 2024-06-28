// for loop

let arr = [1,2,3,4,5]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element <= 4){
        // console.log(element)
    }
}


let myarray = ["batman", "soldier boy", "homelander", "billy butcher"]
// console.log(myarray.length)
for (let i = 0; i <= myarray.length-1; i++) {
    const element = myarray[i];
    // console.log(element)
}



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is the best no`)
    }
    // console.log(element)
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`)
   for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j} and inner loop ${i}`)
    //console.log(i + "*" + j +"="+ i*j);
   }  
}


// break and continue

for (let index = 0; index <= 20; index++) {
    const element = index;
    if(element == 5){
        console.log(element)
        break
    }
    console.log(`value of i is ${index}`)
}


// for (let index = 0; index <= 20; index++) {
//     const element = index;
//     if(element == 5){
//         console.log(element)
//         continue
//     }
//     console.log(`value of i is ${index}`)
// }

