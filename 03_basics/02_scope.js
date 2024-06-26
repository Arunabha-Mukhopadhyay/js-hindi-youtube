function one(){
    const userName = "arunabha"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    // two()
}

one()


//++++++++++++++++++ interesting ++++++++++++++++++++

function addOne(num){
    return num + 1
}
addOne(5)   // it returns but not print


addition2(5)    // Error
const addition2 = function (num){   // expression
    return num + 2
}