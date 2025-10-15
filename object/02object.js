//singleton object
//const tinderUser = new Object();

//nonson singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "gaurav"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "somee@fmail.com",
    fullname : {
        userFullname : {
            firstname: "gaurav",
            lastname : "kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const onj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , onj2}
// const obj3 = Object.assign({},obj1 , onj2)

// const obj3 = {...obj1 , ...onj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email : "f@gmail.com"
    },
    {
        id:1,
        email : "f@gmail.com"
    },
    {
        id:1,
        email : "f@gmail.com"
    },
    {
        id:1,
        email : "f@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));