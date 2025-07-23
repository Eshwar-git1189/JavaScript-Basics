// Scope in JavaScript
//var x = 10; // Global scope
let a = 20; // Global scope
if(true) {
    let a = 40; // This 'a' is block-scoped
    const b = 50; // This 'b' is block-scoped
    //var c = 60; // This 'c' is function-scoped (or globally scoped if not in a function)
    console.log(`Block:`,a); // 40 (block-scoped 'a')
}


//console.log(a); // ReferenceError: a is not defined
//console.log(b); // ReferenceError: b is not defined
//console.log(c); // 60 (c is accessible here because it is function-scoped or globally scoped)

console.log(`Global:`,a);

//Global Scope in windows and in Node.js
// In a browser, global variables become properties of the window object
// In Node.js, global variables are not properties of the global object unless declared with 'global' keyword
// console.log(window.a); // In browser, this would log 20
// console.log(global.a); // In Node.js, this would log 20 if 'a' is declared with 'global.a'
// Note: Using 'var' in the global scope will attach it to the global object in browsers, but not in Node.js
// console.log(this.a); // In Node.js, 'this' in the global scope refers to the global object, which is different from the window object in browsers
// console.log(this.b); // ReferenceError: b is not defined


/*🌐 What is "Global Scope"?
Global scope refers to variables, functions, or objects that are accessible from anywhere in your code.

But how global scope behaves differs between:

🔹 Browser (Window environment)
🔸 Node.js (Server-side)
🔹 Global Scope in the Browser (Windows)
In the browser, the global object is called **window**.

js
Copy
Edit
var name = "Eshwar";
console.log(window.name); // "Eshwar"
✅ Characteristics:
Global variables declared with var become properties of window.

window represents the global execution context (like the browser window/tab).

Functions and variables declared at the top level are attached to window.

🔸 Global Scope in Node.js
In Node.js, the global object is not window—it's called **global**.

js
Copy
Edit
var name = "Eshwar";
console.log(global.name); // undefined
✅ Characteristics:
var, let, and const do not attach variables to global.

The global scope is module-scoped in Node.js (each file is its own module).

To make something truly global, you'd assign it manually:

js
Copy
Edit
global.myVar = 42;
console.log(global.myVar); // 42
*/