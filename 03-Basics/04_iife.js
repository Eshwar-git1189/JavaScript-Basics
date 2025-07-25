// Immediately Invoked Function Expression (IIFE)
// To avoid global pollution we use iife
// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

(function chai(){ //Named IIFE
    console.log(`DB CONNECTED`);
    
})();// ; necessary

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Eshwar`)

