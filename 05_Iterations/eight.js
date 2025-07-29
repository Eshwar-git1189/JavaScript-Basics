const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
    
//     return acc + curval
// },0)

// console.log(myTotal);


//using arrow function

const myTotal = myNums.reduce((acc,cur) => acc + cur, 0)

console.log(myTotal);

const shopingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    },
]


const totalPrice = shopingCart.reduce((acc,item)=> acc + item.price, 0)

console.log(totalPrice);

