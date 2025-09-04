// let x = 3;
// const y = x++;//post increment
// console.log(`x:${x}, y:${y}`);
// console.log(x);

// Expected output: "x:4, y:3"
//is increment me, increse hone se pahel 
// jo value hoti hai wo pahle print hoti hai 
// aur print hone ke baad increse ho jaati hai
//yadi ham print hone ke baad x ko print karne toh x+1 milegi 



let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
//Expected output: "a:4, b:4"
//preincrement : isme ham value ko pahle increse 
//karte hain fir usko print karte hain


/********************Comparision*********************** */

//ignore the way of these comapariasion

// console.log(2>1)//true
// console.log(2>=1)//true
// console.log(2<1)//false
// console.log(2<=1)//false
// console.log(2==1)//false
// console.log(2!=1)//true

// console.log("2">1) //true
// console.log("02">1)//true

// console.log(null>0)  //false
// console.log(null==0) //false
// console.log(null>=0) //true

// console.log(undefined>0)  //false
// console.log(undefined<0) //false
// console.log(undefined>=0)  //false
// console.log(undefined==0) //false
// console.log(undefined<=0) //false
//except = , all case give false output


// === : strict check isme ham data type bhi 
//       check karte hai comparision ke sath

console.log("2" === 2) //false because one is string and one is number















