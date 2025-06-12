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


function logiUserMessage(username){
    if(username === undefined || username === null || username === "") {
        return "Username is required"; // This will return a message if username is not provided

    }
    return `${username} just logged in as ${username}`; // This will return a string with the username
}

console.log(logiUserMessage("Eshwar")); // This will log the message with the username

console.log(logiUserMessage());
