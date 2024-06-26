// IIFE : IMMEDIATELY INVOKEF FUNCTION EXPRESSION

// USS FUNCTION KE ANDAR GLOBAL VARIABLE PROBLEM KARE i.e global se pollution nahi chahiye bilkul bhi

(function chai() {
    console.log(`hello ji`)
})();

((name)=>{
    console.log(`db connected ${name}`)
})("arunabha")