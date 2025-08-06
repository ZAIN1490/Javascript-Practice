
for(i=0 ;i<100 ; i++){
  console.log(i)
}


// even numbers upto 100
for(i=0; i<=100;i+=2){
  console.log(i)
}

// sum of first 100 numbers
let sum = 0;
for(let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("Sum of first 100 numbers:", sum);  


//for with objects
const marks = {
  "Ali": 87,
  "usman":67,
  "noman":77,
  "Nabi":100,
}
for(let a in marks){
  //console.log(a)               
  console.log("The marks of" , a , " are :",marks[a] )
}

//for-of loop
for (let b of "harry") {
   console.log(b)
}