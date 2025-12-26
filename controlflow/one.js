//if
// isme yadi aapka condition true hai 
// tabhi aapka code execute hoga
//  otherwise code execute nahi hoga.
//syntax
//if(condition){
//code block
//}

//if else
//yadi  if ka condition true hai 
// then if execute hoga agar nahi hai 
// toh by default elese run ho jaayega.

//syntax
//if(condition){
//code block
//}else{
 //code block
//}

//example
// const userEmail = "gauravkumar20843@gmail.com"
// if(userEmail){
//     console.log("got user email");
// }else{
//     console,log("Don't have user email");
// }


//false value
//false, 0 , -0 ,BigInt 0n , "" , null , undefined , NaN

//truthy value
// "0" ,  'false' , " " , [] , {} , function(){} , 

//empty arry checking
//if(userEmail.length === 0){
//console.log("Array is empty");
//}

//empty object checking
//const emptyObj = {}
//if(Object.keys(emptyObj).length === 0){
//console.log("object is empty");
//}

//for multiple condition
//syntax
//if(condition){
//code block
//}else if(condition){
//code block
//}else{
//code block
//}
//isi tarh aap jitne chaahen conditioin le sakt ho.

//ternary operator and  Nullish coalescing operator both are not same
//  both are different
//Nullish Coalescing operator(??): null undefined
// let val1;
// val1 = 5 ?? 10 //5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 10 // 10
//val1 = null ?? 10 ?? 20 // 10
// console.log(val1); 

//ternary operator
//condition ? true : false

//const icePrice = 30
//icePrice >=20 ? console.log("good rpice") : console.log("high price")


//switch: it iis also check multiple condition
//syntax

//switch(condition){
//case value:
//      break;
//default:
//     break;
//}

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


