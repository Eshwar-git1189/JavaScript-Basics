const score = 400;

const balance = new Number(100);
// console.log(balance);// Number {100}
// console.log(balance.toString());// Output: "100"
// console.log(balance.toFixed(2)); // Output: "100.00"

const otherNumber = 5354.5433;
//console.log(otherNumber.toPrecision(3));// Output: "5350" (rounded to 3 significant digits)

const hundreds = 1000000;
//console.log(hundreds.toLocaleString("en-IN"));// Output: "10,00,000" (formatted as per Indian locale)

//++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(4,8,45,6));
// console.log(Math.max(4,88,99,77,8));

console.log(Math.random()); // Output: Random number between 0 (inclusive) and 1 (exclusive), e.g., 0.123456789

console.log(Math.random() * 10); // Output: Random number between 0 (inclusive) and 10 (exclusive), e.g., 7.23456789

console.log(Math.random() * 10 + 1); // Output: Random number between 1 (inclusive) and 11 (exclusive), e.g., 5.3456789

console.log(Math.floor(Math.random() * 10) + 1); // Output: Random integer between 1 and 10 (inclusive), e.g., 4

const min = 10;
const max = 12;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between 10 and 12 (inclusive), e.g., 11
