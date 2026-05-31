// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof (myDate));

// let myCreateDate = new Date(2026, 12 , 23)
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2026, 12 , 23,5,4)
// let myCreateDate = new Date("2023-12-13")
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default',{
    weekday:'long'
})