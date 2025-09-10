

// it is old way to write
// console.log(name + repoCount +"value");

//modern way to write
// console.log(`hellow my name is ${name} and my repo count is ${repoCount}`)
// jahan bhi koi variable ko insert karni ho wahan par ham ${}  ka use karenge

// const gameName = new String('gaurav')
//jab ham console men ham iscko print kareng toh 
// 0:"g" 
// 1:"a" 
// 2:"u" 
// 3:"r" 
// 4:"a" 
// 5:"v" ye aayega jisme 0 key  hai aur isme assign value hai
// isko ham key value pair kahte hain   na ki index value

//jitne bhi string function hai sabhi ko ham .length  
// mtb . laga kar access kar sakte hain 
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(2));


// const newString = gameName.substring(0,4)
// console.log(newString);
// const newString = gameName.slice(-8, 4)
// console.log(newString);
// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// let code = "2 + 2";   // primitive string
// console.log(eval(code));//4 

let codeObj = new String("2 + 2");
console.log(eval(codeObj));//[String: '2 + 2']




