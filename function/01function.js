function sayMyNmae(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyNmae();

function addTwoNumbers(num1,num2){//ye num1 , num2 jo hai usko parameter bolte hain
    //ist way
    return num1 + num2;

    //2nd way
    // console.log(num1 + num2);

    //3rd way
    // const sum = num1 + num2;
    // return sum;

    // 4th way
    // let result = num1 + num2;
    // return result;

}


//console.log(num1+num2) //ka jab ham use karenge toh niche baale ka use karne par 9 aa jayega but uske niche bala me undefined print ho jayega
//const result = addTwoNumbers(4,5);//ye 3, 4 jo hai usko argument bolte hain

//but  jab tak return na ho tab tak niche baale ke case me undefined hi rahega jab ham return satement ka use karte hain tab preint ho jayegta 9
//console.log("Result:" , result);


//Backtick ( ) se hum Template Literal create kar rahe hain.

//Template Literal me ${} ka use karke variable ya expression directly string ke andar inject kar sakte hain.
// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//     }
//     return ` ${username} just logged in`
// }



//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage())

//js me " " emty ko maan liya jaata hai false value hai
//username===undefined ke place par ham !username bhi likh sakte hain
//or username==null bhi likh sakte hain
//or username=="" bhi likh sakte hain
//or username.length==0 bhi likh sakte hain
//or username===undefined bhi likh sakte hain

// function calulateCartPrice(...num1){
//     return num1 
// }
// console.log(calulateCartPrice(5,10,15,20));//yadi ham jyada argument pass karte hain toh bhi wo pehla argument hi lega

// ... ye rest operator hai jo ki array ke form me hame saare argument de deta hai
//jab ham ...num1 ka use kiye the tab total value jitna bhi hoga sabhi ke sabhi aa jayega 
//but jab ham val1, val2 print nahi hoga but uske alab jo bhi hoga sahi ke sabi print ho jayega



// const user = {
//     username : "gaurav",
//     price : 100,
//     isLoggedIn : false,
//     lastLoginDays : ["monday","saturday"]
// }

// function handleObject(anyonject){
//     console.log(`Username is : ${anyonject.username}and price is : ${anyonject.price}`);
// }
// handleObject(user);

// jab price hai toh thik but jaise hi prices diye toh output me undefined aa jayega
//kyuki hamne function me price ko define nahi kiya hai
//toh isko solve karne ke liye ham object destructuring ka use karenge

//handleObject(user);
//iske alaba me ham direct bhi kar sakte hain
// handleObject({
//     username : "sam",
//         price : 399,
// })

// const myNewArray = [1,2,3,4,5]
// function returnSecondValue(getArray){
//     result getArray[1]
// } 

// //console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([10,20,30,40,50]));