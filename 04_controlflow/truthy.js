// const value = 0
const string = " "
if(string){
    // console.log(`got the value ${string}`)
}
else{
    // console.log(`didnt get the value`)
}

// Falsy values : false, 0, undefined, "", BigInt: 0n, NaN, null

const arr = []
if(arr.length === 0){
    console.log(`emoty array`)
}

const objeact = {one:"value1"}
if(Object.entries(objeact).length === 1){
    console.log(`empty object`)
}