//this keyword in JavaScript is used to refer to the current object context.
const user = {
    username: "Eshwar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);// This refers to the current object (user)  
    }
}

user.welcomeMessage(); // "Eshwar , welcome to website"
// The `this` keyword refers to the `user` object in this context.
user.username = "Sam"
user .welcomeMessage(); // "Sam , welcome to website"


console.log(this); // In a browser, this refers to the global object (window), in Node.js it refers to the global object (global)  
// In a function, `this` refers to the global object in non-strict mode, or undefined in strict mode.

// function chai(){
//     console.log(this); // In a function, `this` refers to the global object in non-strict mode, or undefined in strict mode.
//     let username = "Eshwar";
//     console.log(this.username); // undefined in Node.js, "Eshwar" in browser if `username` is defined globally
    
// }
// chai(); // In a browser, this refers to the global object (window), in Node.js it refers to the global object (global)

// Variables declared with var, let, or const do not become properties of global.
// Functions declared at the top level are not attached to global, but can be accessed if exported or attached to the global object manually in Node.js.

const chai = () => {
    let username = "Eshwar";
    console.log(this.username); // undefined in Node.js
}
chai();

// Arrow functions

// const addTwo = (num1,num2) => { // Explicit return with curly braces
//     return num1 + num2;
// }
// console.log(addTwo(2,3)); // 5

//Implicit return in arrow functions
const addTwo = (num1, num2) => (num1 + num2) // Implicit return without curly braces
console.log(addTwo(2, 3)); // 5

const objectReturn = () => ({ name: "Eshwar", price: 999 }); // Returning an object with implicit return
console.log(objectReturn()); // { name: 'Eshwar', price: 999 }


// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach(() => {})
