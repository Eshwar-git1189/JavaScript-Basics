const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num)=>{return num+10})// This will return a new array with each number increased by 10
// console.log(newNums); // [11, 12, 13, 14,...

// If you use a scope inside the arrow function, you should use curly braces and return the value explicitly.
// If you use implicit return, you can omit the curly braces.

//Chaining methods

// const newNums = myNums.map((num) => num * 10).map((num) => num + 1);// This will first multiply each number by 10, then add 1 to each result

// console.log(newNums); // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => {
    return num > 45;
  });
  console.log(newNums);//Then it also filters the recent result for given condition

  
  
