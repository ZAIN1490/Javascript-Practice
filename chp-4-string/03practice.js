//what will output of following string

// console.log("har\"".length);          // output = 4

//convert string to lower case

// let name = prompt("ENTER YOUR NAME");
// console.log(name.toLowerCase());




//Extract amount from string

let str = "Please give me Rs 1000";
// let amount =parseInt(str.slice(18,22));              //output  = 1000
let amount =parseInt(str.slice("Please give me Rs ".length))    //also done by this 
console.log(amount)



//try to replace 4th character of string

let hero = "superman";
console.log(hero.replace(hero[3],"Z"));         //output = supZrman


