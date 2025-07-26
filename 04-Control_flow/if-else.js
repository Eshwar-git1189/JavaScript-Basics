//if
// const isUserLoggedIn = true;
// // Check if the user is logged in
// if(isUserLoggedIn) {
//     console.log("Welcome back, user!");

// }

// if( 2 === "2"){
//     console.log("This will not run because strict equality is used.");
// }


// const score = 85;
 
// if(score > 100) {
//     const power = "Fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`); // This will throw an error because 'power' is not defined outside the if block

const balance = 1000;

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500) {
//     console.log("Balance is less than 500")
// }else if(balance < 900) {
//     console.log("Balance is less than 900")
// }else {
//     console.log("Balance is lesser than 1200")
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if(isUserLoggedIn && debitCard) {
    console.log("User can make a purchase");
}
if(isUserLoggedIn && (loggedInFromGoogle || loggedInFromFacebook)) {
    console.log("User can login using social media");
}