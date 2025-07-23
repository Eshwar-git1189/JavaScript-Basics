function sayMyname() {
  console.log("E");
  console.log("S");
  console.log("H");
  console.log("W");
  console.log("A");
  console.log("R");
}

// sayMyname();

function addTwoNumbers(num1, num2) {
  // console.log(num1 + num2);

  console.log(num1 + num2);
}
//addTwoNumbers(2, "a"); // This will result in NaN because "a" is not a number // 2a

// const result = addTwoNumbers(2, 3); // This will log 5 but result will be undefined
// console.log(result);
// console.log(result); // This will log undefined because the function does not return anything

function addTwoNumbersWithReturn(num1, num2) {
  return num1 + num2; // This will return the sum of num1 and num2
  // console.log(num1 + num2); // This will log the sum but not return it
}
const resultWithReturn = addTwoNumbersWithReturn(2, 3); // This will log 5
// console.log("Result:",resultWithReturn); // This will log 5 because the function returns the sum

function logiUserMessage(username) {
  if (username === undefined || username === null || username === "") {
    return "Username is required"; // This will return a message if username is not provided
  }
  return `${username} just logged in as ${username}`; // This will return a string with the username
}

console.log(logiUserMessage("Eshwar")); // Output: "Eshwar just logged in as Eshwar"

console.log(logiUserMessage());// Output: "Username is required" because no username is provided

function calculateCartPrice(...num1) {
  return num1;
}

//console.log(calculateCartPrice(100)); // Output: [100]

//console.log(calculateCartPrice(200, 300, 400)); // Output: [200, 300, 400]

function calculateCartPriceWithReturn(...num1) {
  let totalPrice = 0;
  for (let i = 0; i < num1.length; i++) {
    totalPrice += num1[i]; // This will add each price to the totalPrice
  }
  return totalPrice; // This will return the total price
}

function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
}
//console.log(calculateCartPrice2(100, 200, 300, 400)); // This will log [300, 400] because the first two values are not included in the rest parameter

const user = {
  username: "Eshwar",
  price: 25,
};

function handleObject(anyObject) {
  console.log(anyObject.username); // This will log the username property of the object
  console.log(anyObject.price); // This will log the price property of the object
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  ); // This will log a string with the username and price
}

handleObject(user); // This will log the username and price of the user object

function handleObjectwithReturn(anyObject) {
  return `Username is ${anyObject.username} and price is ${anyObject.price}`; // This will return a string with the username and price
}
console.log(handleObjectwithReturn(user)); // This will return a string with the username and price

handleObject({
  username: "Esh",
  price: 30,
}); // This will log the username and price of the object passed as an argument

const myNewArray = [1, 2, 3, 4, 5];
function handleArray(anyArray) {
  console.log(anyArray); // This will log the entire array
  console.log(anyArray[0]); // This will log the first element of the array
  console.log(anyArray.length); // This will log the length of the array
}

handleArray(myNewArray); // This will log the entire array, the first element, and the length of the array
function handleArrayWithReturn(anyArray) {
  return anyArray[0]; // This will return the first element of the array
}
console.log(handleArrayWithReturn(myNewArray)); // This will log the first element of the array
