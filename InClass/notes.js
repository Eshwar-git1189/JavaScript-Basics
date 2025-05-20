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

// 2) Promises in Js
//     A Promise represents a value which may be available now,later or never.
value = 9;
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
