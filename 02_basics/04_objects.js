const tinderUser = new Object()
tinderUser.id = "123ab"
tinderUser.email = "arunabha@google.com"
tinderUser.isLoggedIn = false
tinderUser.age = 18

// console.log(tinderUser)

const regularUser = {
    email: "arunaha@microsoft.com",
    userName: {
        fullName: {
            firstName: "arunabha",
            lastName: "Mukhopadhyay"
        }
    }
}
// console.log(regularUser.firstName) // undefined

// console.log(regularUser.userName.fullName.firstName)


const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}     // spread operator
console.log(obj3)
// console.log(obj4)
// console.log(obj4 === obj1)

const user = [
    {
        email: "arun@gmail.com",
        id: 123
    },
    {

    },
    {

    }
]

console.log(user[0].email)
console.log(Object.keys(tinderUser))    // output datatype : array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))


const courses = {
    coursesName: "ja in hindi",
    prise: "999",
    courseInstrustor: "hitesh"
}
const {courseInstrustor} = courses
console.log(courseInstrustor)