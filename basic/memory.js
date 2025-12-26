// memory
//it has 2 type  1.Stack & 2.Heap
//primitive me stack-memory ka use hota hai
//non-primitive me Heap-memory ka use hota hai

// let myName = "gauravkumar.com"
// let anotherName = myName
// anotherName = "Gaurav and gaurav"

// console.log(myName);
// console.log(anotherName);

//+++++++++++++++stack+++++++++++++

//isse ye samajh aata hai ki anotherName ka original value change nahi hua
//wo jo bhi ham change kiye the wo duplicate value ke sath hamne change kiye the
//isliye jab ham change karne ke baad me bhi jab ham padhle jis variable me store 
// hai usko print kiye toh jo tha wahi aa gaya  

//+++++++++++++++heap++++++++++++
//lekin heap me ham koi bhi change karte hai wo direct original value ka chnage hota hai
//so ham pahle defined variable ko bhi change karne ke baad yadi print karenge toh sam value 
//changed value print hogi
// example of heap
// const heros = ["shaktimaan","naagraj","doga"]
// const superhero = heros
// heros[2] = "surya";
// console.log(superhero)
// console.log(heros)