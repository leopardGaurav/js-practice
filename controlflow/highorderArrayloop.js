//for in and for of loop

//for of

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }

// const greetings  = "hello world !"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//Maps: only print unique  value 
//yadi ham ek ki value ko multiple time me
//  yadi ham print kar den toh bhi ek hi time print hoga aur 
//always ji order me store kiya gaya hai use order me print hoga 

// const map = new Map()
// map.set('IN' , "INDIA")
// map.set("USA" , "United staste of America")
// map.set('fr' , "france")


// console.log(map);

//map iteratable nahi hai so taht ham for in loop nahi laga sakte hain isme

// for(const key of map){
//     console.log(key);
// }
// is type me print hoga
// [ 'IN', 'INDIA' ]
// [ 'USA', 'United staste of America' ]
// [ 'fr', 'france' ]


// for(const [key , value] of map){
//     console.log(key,':-', value);
// }
//ab is tarah print hoga
// IN :- INDIA
// USA :- United staste of America
// fr :- france

// const myObject = {
//     'game1' : 'NFS',
//     'game'  : 'spiderman',
// }
//object is not iterateable so that we can't use forloop in object
// for(const [key,value] of myObject){
//     console.log(key, ':-', value)
// }


//object for of loop work nahi karta hai isliye ham ispa rfor in loop ka use karte hain

// const myObject = {
//     js: 'javascript',
//     cpp : 'c++',
//     rb  : "ruby" , 
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }
// javascript
// c++
// ruby
// swift by apple

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


// const programming = ["js" , "rb" , "java" , "cpp"]
// for(const key in programming){
//     console.log(programming[key]);
// }
// js
// rb
// java
// cpp