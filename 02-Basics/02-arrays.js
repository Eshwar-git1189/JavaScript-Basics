const marvel_heroes = ["thor", "ironman", "hulk", "black widow", "captain america"];
const dc_heroes = ["superman", "batman", "wonderman", "flash", "aquaman"];
// marvel_heroes.push(dc_heroes);
// Adding the DC heroes array to the Marvel heroes array
// Now marvel_heroes contains all Marvel heroes and the DC heroes array as a single element
// console.log(marvel_heroes); // ["thor", "ironman", "hulk", "black widow", "captain america", ["superman", "batman", "wonderman", "flash", "aquaman"]]
// console.log(marvel_heroes[5][1]); // "batman", accessing the second element of the DC heroes array within the Marvel heroes array

// console.log(marvel_heroes[5].length); // 5, the length of the DC heroes array within the Marvel heroes array

// console.log(marvel_heroes[5][0]); // "superman", accessing

const allheros = marvel_heroes.concat(dc_heroes);
// Concatenating the DC heroes array to the Marvel heroes array
//console.log(allheros); // ["thor", "ironman", "hulk", "black widow", "captain america", "superman", "batman", "wonderman", "flash", "aquaman"]

const allheros2 = [...marvel_heroes, ...dc_heroes];
// Using the spread operator to concatenate the DC heroes array to the Marvel heroes array
//console.log(allheros2); // ["thor", "ironman", "hulk", "black widow", "captain america", "superman", "batman", "wonderman", "flash", "aquaman"]

const anotherArr = [1, 2, 3,[ 4, 5, 6],[7, 8, [9, 10]]];

const real_anotherArr = anotherArr.flat(Infinity); 

// Flattening the nested arrays to a single level
 console.log(real_anotherArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Using flat() with Infinity to flatten all levels of nesting
// console.log(anotherArr.flat(1)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]], flattening only one level
// console.log(anotherArr.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], flattening two levels
// console.log(anotherArr.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], flattening three levels
// console.log(anotherArr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]], flattening only one level by default
// console.log(anotherArr.flatMap(x => x)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]], using flatMap to flatten one level
// console.log(anotherArr.flatMap(x => x * 2)); // [2, 4, 6, 8, 10, 12, 14, 16, [18, 20]], using flatMap to double each element and flatten one level


console.log(Array.isArray("Eshwar")); // false, checking if a string is an array
console.log(Array.from("Eshwar"));
console.log(Array.from({name: "Eshwar"})); // ["E", "s", "h", "w", "a", "r"], converting a string to an array // Interesting




// Array destructuring
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300], creating an array from individual elements
const scores = [score1, score2, score3]; // Creating an array from the variables

