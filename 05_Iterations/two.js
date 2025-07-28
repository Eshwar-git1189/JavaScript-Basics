// while

// while (condition) {
//     // code to execute while condition is true
//     console.log("Condition is true, executing loop body");
//     // Update condition to eventually break the loop
//     // condition = false; // Uncomment this line to stop the loop
    
// }

let index = 0;
while (index < 10) {
    //console.log("Current index is", index);
    index++; // Increment index to avoid infinite loop
}

let myArray = ["VK", "RS", "MSD", "JB", "Mia Siraj"];
let arrayIndex = 0;
while (arrayIndex < myArray.length) {
    const element = myArray[arrayIndex];
    //console.log("Current element is", element);
    arrayIndex++; // Increment index to avoid infinite loop
}


// do while
let count = 5;
do {
    console.log("Count is", count);
    count++; // Increment count to avoid infinite loop
} while (count < 5);
