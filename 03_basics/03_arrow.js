const user = {
    name: "arunbbha",
    id: "1234",

    WelcomeMessage: function(){
        console.log(`${this.name} welcome to website. `);
        // console.log(this);
    }
}

// user.WelcomeMessage()
// user.name = "sam"       // context changed
// user.WelcomeMessage()

// console.log(this)

// function chai(){
//     let username = "arunabha"
//     console.log(this.username)  //undefined
// }
// chai()

const chai = () => {
   let  user = "arunabha"
   console.log(this.user)
}
// chai()

// const addTwo = (n1, n2) =>{
//     return n1 + n2
// }

// const addTwo = (n1, n2) => (n1 + n2)    // implicit return 

const addTwo = (n1, n2) => ({name: "arunabha"})
console.log(addTwo(8, 9))