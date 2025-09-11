//Dates
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// // let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);//jab ham second me define karna ho toh ham 1k se divide karenge
let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `Today is  ${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long"
    timeZone:''
})

















