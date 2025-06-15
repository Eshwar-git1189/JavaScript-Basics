let score = true

//console.log(typeof score); //boolean
//console.log(typeof (score));

let valueInteger = Number(score);
//console.log(typeof valueInteger); //number
//console.log(valueInteger); //33

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN
//" " => 0

let isLoggedIn = ""
let isLoggedInBoolean = Boolean(isLoggedIn);
//console.log( isLoggedInBoolean); //boolean

//1 => true
//0 => false
//" " => false
//"abc" => true


let someNumber = 33
let someString = String(someNumber);
//console.log(typeof someString); //string
//console.log(someString); //33

// ********** Operations **********

let value = 3
let negValue = -value
//console.log(negValue); //-3

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2/2); //1
// console.log(2**2); //4
// console.log(2%2); //0

let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
//console.log(str3); //helloworld
//console.log(str1 + str2); //helloworld

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log((3+4)*5%3); 

// console.log(true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCount = 100
gameCount++;
console.log(gameCount); //101
++gameCount
console.log(gameCount); //102

