const accountID = 1189; // Declares a constant variable accountID with value 1189
let accountEmail = "esh@gmail.com"; // Declares a variable accountEmail with value "esh@gmail.com"
var accountPassword = "123456"; // Declares a variable accountPassword with value "123456"
accountCity = "Delhi"; // Declares a variable accountCity (global) with value "Delhi"
let accountState; // Declares a variable accountState with value undefined
// accountID = 2 // not allowed   // Error if uncommented: Assignment to constant variable

accountEmail = "hc@hc.com"; // Updates accountEmail to "hc@hc.com"
accountPassword = "123858"; // Updates accountPassword to "123858"
accountCity = "Mumbai"; // Updates accountCity to "Mumbai"

console.log(accountID); // Output: 1189

/*
Prefer not to use var
because of issue in block scope and function scope
*/
console.table({
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
});
// Output (as a table):
// ┌───────────────┬───────────────┐
// │   (index)     │    Values     │
// ├───────────────┼───────────────┤
// │  accountID    │    1189       │
// │ accountEmail  │ 'hc@hc.com'   │
// │ accountPassword│ '123858'     │
// │ accountCity   │ 'Mumbai'      │
// │ accountState  │  undefined    │
// └───────────────┴───────────────┘
