// Array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);
// console.log(myArr[6]); // undefined, as there is no index 6
// console.log(myArr.length); // 6, the length of the array
// Array with mixed types
const mixedArr = [1, 'two', true, null, undefined, { key: 'value' }, [1, 2, 3]];
// console.log(mixedArr[0]); // 1
// console.log(mixedArr[1]); // 'two'

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2[0]); // 1
// console.log(myArr2[1]); // 2


// Array methods

// myArr.push(6); // Adds 6 to the end of the array
// myArr.unshift(-1); // Adds -1 to the beginning of the array
// myArr.pop(); // Removes the last element (6) from the array
// console.log(myArr); // [-1,0, 1, 2, 3, 4, 5]
// myArr.shift(); // Removes the first element (-1) from the array

// console.log(myArr); 
// console.log(myArr.includes(3)); // true, checks if 3 is in the array
// console.log(myArr.indexOf(3)); // 3, returns the index of 3 in the array
// console.log(myArr.indexOf(6)); // -1, returns -1 if 6 is not in the array

const newArr = myArr.join()

// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// console.log(newArr); // "0,1,2,3,4,5", joins the array elements into a string

// Slicing and Splicing
console.log("A ",myArr);

const slicedArr = myArr.slice(1, 3); // Slices the array from index 1 to 3
console.log(slicedArr); // [1, 2, 3]
console.log("B ",myArr);

const splicedArr = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log(splicedArr); // [1, 2, 3]
console.log("C ",myArr); // [0, 4, 5], the original array is modified
