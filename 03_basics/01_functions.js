// function addition( num1, num2){
//     console.log( num1 + num2)
// }

function addition( num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addition(3, 4)
// console.log("rusult: ",result)

function userLoggedIn(userName){        // to not use if code then : userName = "sam" in parameter 
    if (!userName) {
        console.log("please enter a username")
        return
    }
    return `${userName} just logged in`
}
// let announce = userLoggedIn("arunabha")
// console.log(announce)

// console.log(userLoggedIn())
// console.log(userLoggedIn("arunabha"))



function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500))

const user = {
    userName: "arunabha",
    price: 199
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}
// handleObject(user);
handleObject({
    userName: "sam",
    price: 233
})

const arr = [200 , 400 , 500 , 600 , 1200]
function returnSecondValue(newArray) {
    return newArray[1]
}
// console.log(returnSecondValue(arr))
console.log(returnSecondValue([200, 400, 600]))