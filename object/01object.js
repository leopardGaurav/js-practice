//singleton

//object literals

const mySym= Symbol("key1")

//ye object litteral hai

const JsUser = {
    name : "gaurav",
    "full name" : "gaurav kumar",//isko access krne k liye bracket notation use krna pdega
    [mySym] : "value1",
    age : 20,
    locatioin : "India",
    email : "gauravkumar20843@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"]
}

//for acessing object properties

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])//but iska datatype string hai jabki  hame chahiye tha
//yadi iska hame symbol data type chahiye to upper me hamko square bracket ka use karna hoga
// "=" iska use karke ham value ko overwrite kar sakte hain
JsUser.email = "gaurav@kumar.com"
//but yadi ham chaahte hain ki hamara koi value change na kar paaye toh ham freeaze kar denge usko
Object.freeze(JsUser)

//greeting , greeting two wo method hai jiske help se ham object ke nader bhi ham function ka use kar paate hain


JsUser.greeting = function(){
    console.log("hello js user" );
}

JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}