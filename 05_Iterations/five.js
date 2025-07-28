
const coding = ["js", "python", "java", "cpp"];

coding.forEach( function (item) {
    //console.log(item); // This will log each item in the array
} )
coding.forEach(function (val) {
     //console.log(val); // This will log each value in the array
})
// forEach with arrow function
coding.forEach( (val) => {
    //console.log(val); // This will log each value in the array
})

function printMe(item){
    //console.log(item);
    
}
coding.forEach(printMe);


coding.forEach((item, index, arr)=>{
   // console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName: "js"
    },
    {
        languageName:"Java",
        languageFileName: "java"
    },
    {
        languageName:"Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})