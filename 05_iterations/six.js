// const prgramming = ["js", "c++", "ruby", "java", "pyhton"]

// const result = prgramming.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(result) // undefined . does not return


const numbers = [1,2,3,4,5,6]

// const result = numbers.filter( (items) => {
//     return items > 4
// })

// const newNumbs = []

// numbers.forEach((items) => {
//     if (items > 4) {
//         // console.log(items)
//         newNumbs.push(items)
//     }
// })

// console.log(newNumbs)

// console.log(result)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => {
    return bk.genre === "Science"
  })

  userBooks = books.filter((items) => {
    return items.publish >=1990 && items.genre === "History"
  })

  console.log(userBooks)