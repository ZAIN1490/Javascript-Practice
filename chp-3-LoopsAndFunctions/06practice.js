//Program to print marks using for loops===================================

// let marks = {
//   Zain: 99,
//   Ali: 98,
//   Harry: 100,
//   Noman: 89,
// };
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log( "THE MARKS OF", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]]);
//}



//solve problem 1 using forin loop========================================

// for (let i in marks) {
//     console.log( "THE MARKS OF",i ,"are",marks[i]);
//   }
  
  




// ===============================Problem 3======================================

//program to print tyr again untill user enter correct number
// let cn = 6;
// let i;
// while (i!=cn) {
//     i=prompt("ENTER THE NUMBER");
//     console.log("TRY Again");

// }

// console.log("You have won.You enter correct number");
 


// ==========================problem 4=================================

// function to print mean of 5number

let n1 = 4;
let n2 = 5;
 let n3 = 6;
 let n4 = 7;
 let n5 = 8;
 const mean = (a,b,c,d,e)=>{
           return (a+b+c+d+e)/5;

 }
 console.log("The mean of 5 number is" ,mean(n1,n2,n3,n4,n5));
   