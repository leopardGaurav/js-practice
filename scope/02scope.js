function one(){
    const username = "gaurav"

    function two(){
        const website = "youtube"
         console.log(website)
    }
  
     console.log(username);
     two()
}
one();

if(true){
    const username = "gaurav"
    if(username === "gaurav"){
        const website = "youtube"
         console.log(website)
    }
   //console.log(website); // error kyuki website if ke andar hai
}
//console.log(username); // error kyuki username if block ke bahar hai




//+++++++++++++++++++++++++++++++++++++

function addone(value){
    return num + 1;
}

addone(5);


addTwo(5);
const addTwo = function(num){
    return num + 2;
}

