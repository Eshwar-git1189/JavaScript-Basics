// for
  
for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    //console.log("Outer loop value is ",i);
    
    for (let j = 0; j < 10; j++) {
        //console.log("Inner loop value is ",j);
        
        
    }
    
}
let myArray = ["VK","RS","MSD","JB","Mia Siraj"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}


// break and continue
// for (let index = 0; index < 10; index++) {
//     const element = index;
    
//     if (element === 5) {
//         console.log("Breaking the loop at index", element);
//         break; // exits the loop when element is 5
//     }
    
//     console.log(element);
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    
    if (element === 5) {
        console.log("Skipping the loop at index", element);
        continue; // skips the current iteration when element is 5
    }
    
    console.log(element);
}