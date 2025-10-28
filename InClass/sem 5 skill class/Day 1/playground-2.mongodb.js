// Select the database to use.
use("ESH");

// Insert a few documents into the sales collection.
db.getCollection("conndb").insertMany([
  {
    Name: "Rahul",
    age: "21",
    "Jercey No": "7",
    place: "India",
  },
  {
    Name: "Amit",
    age: "19",
    "Jercey No": "10",
    place: "India",
  },
  {
    Name: "Sanjay",
    age: "22",
    "Jercey No": "18",
    place: "India",
  },
  {
    Name: "Kiran",
    age: "20",
    "Jercey No": "5",
    place: "India",
  },
  {
    Name: "Vivek",
    age: "23",
    "Jercey No": "3",
    place: "India",
  },
  {
    Name: "Rohan",
    age: "21",
    "Jercey No": "14",
    place: "India",
  },
  {
    Name: "Manish",
    age: "22",
    "Jercey No": "8",
    place: "India",
  },
  {
    Name: "Suresh",
    age: "19",
    "Jercey No": "9",
    place: "India",
  },
  {
    Name: "Ajay",
    age: "20",
    "Jercey No": "4",
    place: "India",
  },
  {
    Name: "Deepak",
    age: "21",
    "Jercey No": "16",
    place: "India",
  },
]);
