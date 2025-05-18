let score = true

console.log(typeof score); //number
console.log(typeof (score));

let valueInteger = Number(score);
console.log(typeof valueInteger); //number
console.log(valueInteger); //33

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN
//" " => 0

let isLoggedIn = ""
let isLoggedInBoolean = Boolean(isLoggedIn);
console.log( isLoggedInBoolean); //boolean

//1 => true
//0 => false
//" " => false
//"abc" => true


let someNumber = 33
let someString = String(someNumber);
console.log(typeof someString); //string
console.log(someString); //33