// ==================================================================
// =========================Arithmetic Operators========================
// ==================================================================


let a = 50;
let b = 10;
console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a * b=",a*b);
console.log("a / b=",a/b);
console.log("a % b=",a%b);
console.log("a ** b=",a**b);       


// increment and decrement operators
console.log("a++ =",a++);    //This will show 50 but when next time we print a it return a
// console.log(a);                //Output is 1
console.log("++a=",++a);      //This will show 51

console.log("b-- =",b--);       //this shows 10 but next time when we print b it return 9
// console.log(b)                  //output is 9
console.log("--b=",--b);





// =========================================================================
//==============================ASSIGNMENT OPERATORS========================
// =========================================================================


let c = 20;               
let d = 43;                   //assign value 43 to d and 20 to c

c+=5;                            //same as c=c+5;
console.log(c)
c-=6;                              //same as c=c-5;
console.log(c)
c*=4;                               //same as c=c*5;
console.log(c)
c/=3;                                //same as c=c/5;
console.log(c)
c**=3                           //same as c=c**3
console.log(c)             
c%=4;                              //same as c=c%3
console.log(c)                   




// ======================================================================
// =======================COMPARISON OPERATORS=============================
// ======================================================================


let x = 6;
let y = 7;
console.log("x==y is",x==y);            //means equal to ------->return false
console.log("x!=y",x!=y);              //means not equal to--------->return true
console.log("x===y is",x===y);           //is equal to and type is also equal to
console.log("x!==y is",x!==y);             //is not equal to and type is also not equal to
console.log("x>y is",x>y);                 //return false      
console.log("x<y is",x<y);               //return true
console.log("x>=y is",x>=y);             //false
console.log("x<=y is",x<=y);             //true




// ==========================================================================
// ===========================LOGICAL OPERATORS============================
// =========================================================================

let n1 = 6;
let n2 = 8
 console.log(n1<n2 && n1==6);             //&& and operator returns true when both are true
console.log(n1>n1 || n2==8);             // || or operator returns true when any one is true
console.log(!true);                      // NOT operaot invert the input

 

                        


