const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
// js
// ruby
// java
// python
// cpp


// const values = coding.forEach(function (item) {
//     console.log(item);
//      return item
// })
// console.log(values);//undefined jab ham return kar denge 
// toh bhi forEach me kuch return nahi hoga


// const mynums = [1,2,3,4,5,6]
// const newnums = mynums.filter((num)=>num > 4) // concise way

// const newnums = mynums.filter((num)=>{// block way
//     return num > 4
// })

// const newnums = []
// mynums.forEach((num)=>{
//     if(num > 4){
//         newnums.push(num)
//     }   
// })
 
// console.log(newnums);//[ 5, 6 ]

// const newnums == munumbers.map((num) => num * 2)
// console.log(newnums);//[ 2, 4, 6, 8, 10, 12 ]

// const newnums = mynums.map((num)=> num * 2).map((num) => num + 1)// chaining of map function
// const newnums = mynums
//                 .map((num)=> num * 2)
//                 .map((num) => num + 1)
//                 .filter((num) => num > 10)
// console.log(newnums);

// const mynums = [1,2,3]
// const mytotal = mynums.reduce(function(accumulator , currentvalue){
//     console.log(`Accumulator : ${accumulator}  currentvalue : ${currentvalue}`);
//     return accumulator + currentvalue
// } ,0)// 0 is initial value of accumulator
// console.log(mytotal);//6

// const mytotal = mynums.reduce((accumulator , currentvalue) => accumulator + currentvalue ,0)
// console.log(mytotal);//6 

const shoppingcart = [
    {productId : 1 , productname : "laptop" , price : 45000},
    {productId : 2 , productname : "phone" , price : 15000},
    {productId : 3 , productname : "tablet" , price : 22000},
]
//shoppingcart.reduce((accumulator , currentvalue) =>accumulator + currentvalue.price ,0)

// const totalprice = shoppingcart.reduce((accumulator , currentvalue) => accumulator + currentvalue.price ,0)
// console.log(totalprice);//82000