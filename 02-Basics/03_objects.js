//Objects in depth in JavaScript 



//Objects are a collection of key-value pairs
const person = {   
    name: 'John',
    age: 30,
    isEmployed: true,
    hobbies: ['reading', 'gaming', 'hiking'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};
// Singleton object
const singleton = {
    name: 'Singleton',
    value: 42,
    getValue: function() {
        return this.value;
    }
};

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name:"Jane Doe",
    "full name":"Jane Doe Simon", // Using quotes for property names with spaces
    [mySym]:"myKey1",
    age: 25,
    location: "New York",
    email:"esmvimi@vmmro.cum",
    isLoggedIn: true,
    lastLoginDays:["Monday", "Wednesday", "Friday"]
}

// console.log(JsUser.name); // Accessing property using dot notation
// console.log(JsUser['email']);//Better to use this format // Accessing property using bracket notation
// console.log(JsUser["full name"]);// Only this way to print 
// console.log(JsUser[mySym]);

// //console.log(mySym["myKey1"]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "jngv@nic.vig"
//Object.freeze(JsUser)// Prevents any changes to the object
JsUser.email = "kkkdd33k"
//console.log(JsUser);// Output: { name: 'Jane Doe', full name: 'Jane Doe Simon', age: 25, location: 'New York', email: 'kkkdd33k', isLoggedIn: true, lastLoginDays: [ 'Monday', 'Wednesday', 'Friday' ] }



JsUser.greeting = function(){
    console.log("Hello js user!!! ");
    
}
console.log(JsUser.greeting());


JsUser.greetingTwo= function(){
    console.log(`Hello js user!!!,${this.name} `);
    
}
console.log(JsUser.greetingTwo());





