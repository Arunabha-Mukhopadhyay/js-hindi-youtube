// For Each:

const prgramming = ["js", "c++", "ruby", "java", "pyhton"]

// prgramming.forEach(function (item){
//     console.log(item)
// });

// prgramming.forEach((item) => {
//     console.log(item)
// });

function print(item) {
    // console.log(item)
}

prgramming.forEach(print)

prgramming.forEach((item , index,arr) => {
    // console.log(item, index, arr)
})

const coding = [
    {
        language: "javascript",
        languagefile: "js"
    },
    {
        language: "C",
        languagefile: ".c"
    },
    {
        language: "Java",
        languagefile: "java"
    },
]

coding.forEach((item)=>{
    console.log(item.languagefile)
    console.log(item.language)
})