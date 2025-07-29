const coding = ["js", "python", "java", "cpp"];

const values = coding.forEach((item)=>{
    //console.log(item);
    return item; // This will not return anything as forEach does not return a value
})
//console.log(values);// undefined


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num)=> num > 5)
//console.log(newNums); // [6, 7, 8, 9, 10]


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
    return num > 5;// This will return a new array with numbers greater than 5
})
//If you use a scope inside the arrow function, you should use curly braces and return the value explicitly.
// If you use implicit return, you can omit the curly braces.

//console.log(newNums); // [6, 7, 8, 9, 10]


//If you want to push the values into a new array based on a condition, you can use forEach instead of filter.
// However, forEach does not return a new array, so you need to create an empty array and push the values into it.
const Nums = []
myNums.forEach((num) => {
    if(num > 5){
        Nums.push(num); // This will push numbers greater than 5 into the Nums array
    }
})
//console.log("Nums:"+Nums); // [6, 7, 8, 9, 10]



const books = [
    { title: "Book 1", price: 100, publisher: "Publisher A" },
    { title: "Book 2", price: 200 , publisher: "Publisher B" },
    { title: "Book 3", price: 300, publisher: "Publisher C" },
    { title: "Book 4", price: 400, publisher: "Publisher D" },
    { title: "Book 5", price: 500, publisher: "Publisher E" }
];

const userBooks = books.filter((bk) => {
    return bk.price < 300 && bk.title == "Book 1"; // This will filter books with price less than 300
})

console.log(userBooks); // This will log the userBooks array
// Output: [ { title: 'Book 1', price: 100, publisher: 'Publisher A' }, { title: 'Book 2', price: 200, publisher: 'Publisher B' } ]
// The filter method creates a new array with all elements that pass the test implemented by the provided function.

