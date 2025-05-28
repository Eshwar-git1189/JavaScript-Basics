//Dates

//

let myCreatedDate = new Date(2025, 0, 1); // year, month, day
//console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2025-01-01");
//console.log(myCreatedDate2.toDateString());

let myCreatedDate3 = new Date(2025, 0, 1, 20, 30, 0); // year, month, day, hours, minutes, seconds
//console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);

//console.log(myCreatedDate3.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000));
// console.log(Math.floor(Date.now()/1000/60));

let newDate = new Date();
//console.log(newDate.toLocaleDateString());

// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

`${newDate.getFullYear()}-${
  newDate.getMonth() + 1
}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
// console.log(
//   `${newDate.getFullYear()}-${
//     newDate.getMonth() + 1
//   }-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
// );

//console.log(newDate.toLocaleString());

newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

// console.log(
//   newDate.toLocaleString("default", {
//     weekday: "long",
//     timeZone: "UTC",
//     timeZoneName: "short",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   })
// );

//console.log(newDate.getTimezoneOffset());


let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
