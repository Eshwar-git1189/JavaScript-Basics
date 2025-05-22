// Synchronous and Asynchronous

// 🔄 Synchronous
// Definition: Operations happen one after another, in sequence.

// Each task waits for the previous one to finish before starting.

// Like: Standing in a line — you wait your turn.

// 🧠 Example (in JavaScript):
// js

console.log("A");
console.log("B");
console.log("C");

// Output:
// A
// B
// C

// 🔁 Asynchronous
// Definition: Operations can happen independently and don’t wait for each other.

// A task can start and finish later, without blocking the next task.

// Like: Ordering food in a restaurant — you order, and while it’s being prepared, you do other things.

// 🧠 Example (in JavaScript):
// js

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000); // runs after 1 second

console.log("C");

// Output:

// A
// C
// B

// Call Back function
// A callback function is a function passed into another function as an argument.
// The receiving function can then execute the callback at a later time.
// This allows for asynchronous behavior, where a function can continue executing while waiting for another function to complete.
// Example of a callback function in JavaScript:
// js
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched!";
    callback(data);
  }, 2000); // Simulating a delay of 2 seconds
}
fetchData((data) => {
  console.log(data); // Output: Data fetched!
});
// Callbacks are often used in asynchronous programming to handle events or responses.

// Callbacks can lead to "callback hell" if not managed properly, making code harder to read and maintain.
// To avoid this, developers often use Promises or async/await syntax.
// Callbacks are often used in asynchronous programming to handle events or responses.
// 2) Promises in Js
//     A Promise represents a value which may be available now,later or never.


const promise = new Promise(function (resolve, reject) {
  // Do something
  if ("Order Delivered") {
    resolve(value); // fulfilled
  } else {
    reject("Order failed to deliver"); // rejected
  }
});

// Blocking operations
// Synchronous functions

//Async/Await --> Easiest way to work with promises (Asynchronous operations)

async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
    // processData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
