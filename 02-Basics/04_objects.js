//const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "come@gmail.com",
  fullName: {
    userfullName: {
      firstName: "hithesh",
      lastName: "choudhary",
    },
  },
};

// console.log(regularUser.fullName.userfullName.firstName);

// console.log(regularUser.fullName?.userfullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// data will be assigned to obj1 from obj2 and then it will be stored in obj3

// console.log(obj3);
// console.log(obj1);

const obj3 = { ...obj1, ...obj2 }; // spread operation
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "finicin2MFF.COD",
  },
  {
    id: 1,
    email: "finicin2MFF.COD",
  },
  {
    id: 1,
    email: "finicin2MFF.COD",
  }
  
];
// console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
