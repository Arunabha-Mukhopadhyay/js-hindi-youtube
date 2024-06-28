const myNums = [1,2,3]

const total = myNums.reduce((acc, curv) => {
    // console.log(`acc: ${acc} and curv: ${curv}`)
    return acc + curv
},0)
// console.log(total)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, currPrice) => {
    return acc + currPrice.price
}, 0)
console.log(totalPrice)