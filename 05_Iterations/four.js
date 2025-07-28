const myObject = {
    js: 'JavaScript',
    python: 'Python',
    java: 'Java',
    cpp: 'C++'
};

for (const key in myObject) {
    //console.log(myObject[key]); // Accessing the value using the key
    
}

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
for (const key in programmingLanguages) {
   // console.log(key); // This will log the index of the array
    //console.log(programmingLanguages[key]); // Accessing the value using the index
    
}

const mapObject = new Map();
mapObject.set('name', 'John');
mapObject.set('age', 30);
mapObject.set('city', 'New York');

for (const key in mapObject){
    //console.log(key); // This will not work as Map is not iterable with 'for...in'
    // console.log(mapObject[key]); // This will also not work
    
}

