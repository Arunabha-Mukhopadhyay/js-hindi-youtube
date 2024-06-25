const marvel = ["ironman","black widow","hawkeye"]
const dc = ["batman","joker","superman"]

// marvel.push(dc)
// console.log(marvel[3][0])

// const heros = marvel.concat(dc)
// console.log(heros)
// console.log(marvel)

// const newHeros = [...marvel, ...dc]
// console.log(newHeros)
// console.log(marvel)

const anotherArr = [1,2,3,4,5, [6,7,8], 9,[6,7,[3,4]]]
console.log(anotherArr.flat(Infinity))

console.log(Array.isArray("arunabha"))
console.log(Array.from("arunabha"));
console.log(Array.from({name:"arunabha"}));    // Interesting case

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))
