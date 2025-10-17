// const user = {
//     username: "gaurav",
//     price : 999,

//     welcomeMessage: function(){
//         console.log( `${this.username} , welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username ="sam"
// user.welcomeMessage()
//jab ham in 3 ko print kar rahe hain toh 
// gaurav , welcome to website
// {
//   username: 'gaurav',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// but jab ham usko comment kar diye uske baad jab ham 
// jab console.log(this) ko jab ham print kiye toh {} print hua 
//console.log(this);

//this : current contrast ko refer karta hai


//browser ke ander global object hai : window object
//node ke ander global object hai : global object

// function chai(){
//     let username = "gaurav";
//     console.log(this.username);
// }
// chai();

//function ke anader this ka value undefined  aata hai

// const chai = function(){
//     let username = "gaurav";
//     console.log(this.username);
// }
// chai();//undefined

const chai = () =>{
    let username = "gaurav";
    console.log(this.username);
}

chai();//undefined