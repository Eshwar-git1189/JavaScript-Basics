const accountID = 1189
let accountEmail="esh@gmail.com"
var accountPassword = "123456"
accountCity = "Delhi"
let accountState;
// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "123858"
accountCity = "Mumbai"


console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and function scope
*/ 
console.table({accountID, accountEmail, accountPassword, accountCity,accountState});