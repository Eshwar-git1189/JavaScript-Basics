const userEmail = []

if (userEmail) {
  console.log("Email is provided");
}else {
  console.log("Email is not provided");
}

// falsy values

// false, 0, -0, "", null, undefined, NaN, BigInt 0n 

// truthy values
// "0", "false", " " => (space), [], {}, function(){}, BigInt 1n, Symbol("symbol")

// To check array or object is empty
// const emptyArray = [];
// if(emptyArray.length === 0) {
//   console.log(" array is empty");
// }

const emptyObject = {};

if(Object.keys(emptyObject).length === 0){
  console.log("Object is empty")
} 

false == 0 // true
false === 0 // false
false == "" // true
0 == "" // true
0 == null // false  
0 == undefined // false
0 == NaN // false


// Nullish Coalescing Operator (??)

// It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10
// val1 = null ?? 10 ?? 20; // 10 

console.log(val1);


// Ternary Operator
//condition ? true : false;

const isUserLoggedIn = true;
const userStatus = isUserLoggedIn ? "User is logged in" : "User is not logged in";
console.log(userStatus);



// Optional Chaining Operator (?.)
// It allows you to safely access deeply nested properties without having to check each level for null or undefined.
const user = {
    name: "John",
    address: {
        city: "New York"
    }
};
const userCity = user.address?.city || "City not available";
console.log(userCity); // "New York"




