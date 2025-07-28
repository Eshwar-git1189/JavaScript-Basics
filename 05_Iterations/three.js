// for of
//["", "", ""]//array of strings
//[{}, {}, {}]//array of objects

const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
   // console.log("Current element is", element);
    
}

const greeting = "Hello";
for (const greet of greeting) {
    //console.log("Current character is", greet);
    
}

// Maps

const map = new Map()
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');

//console.log("Iterating over map entries:\n",map);

for (const [key,value] of map) {
  //  console.log(key,':', value);
    
}

const myObject = {
    game1: 'Cricket 24',
    game2: 'EA Football'
}

// for (const [key,value] of myObject) {//  // This will not work as objects are not iterable directly
//     //console.log(key, ':', value);
    
// }