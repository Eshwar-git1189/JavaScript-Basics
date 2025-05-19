// Primitive

// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2 // Number

const isLoggedIn = false

const id = Symbol('558')
const anotherid = Symbol('558')

console.log(id === anotherid)

const bigNumber = 58329414865979416265n
console.log(typeof bigNumber);


//Reference (Non Primitive)

//Array, Object, Functions

const heros = ["Shaktiman","bheem","arjun"];

let myObj = {
    name : "Eshwar",
    age : 19,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);// Object Function
console.log(typeof anotherid);
