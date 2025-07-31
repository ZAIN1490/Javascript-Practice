// var is used in old javascript but in modern js we used let and
// avoid var bcz of  some reason


// ===============dont use var in js===================



// 1.Var is globally scoped while let and const are block scopped
//Example
{
    let a = 5;
    var b = 8;
    
     console.log(a);      //  we print it only in block bcz let is  block scoped
}
console.log(b);   //This can print bcz var is globally scoped


//2. Var can be updated and re-declared 
var c = 9;
var c = "Zain";
console.log(c);

//let can be updated but not re-declared

let d = 6;
//let d = "Harry";          //This throw error bcz let cannot re-declared
d = "Harry";                //but we can update value
console.log(d);

// ========================C O N S T======================================

//const mean constant whose values cannot change
//const cannot be updated or re-declared
const std = "Ali";
// const std = "Saim";         //const cannot re declared
// std = "Momin";               //const cannot be updated
console.log(std);



//const must be initialized during declaration unlike let and var

// cont myname;          //value baad mein dedunga is not allowed in const




                       
