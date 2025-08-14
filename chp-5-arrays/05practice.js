//create an array of number and take input from user and add to array

// let arr = [34,766,84,86];
// arr.push(parseInt(prompt("enter the number")));
// console.log(arr)


//keep adding number in array untill 0 is added in number
// let arr = [34,766,84,86];
// let a;
// do{
//  a = parseInt(prompt("ENTER THE NUMBER"));
// arr.push(a);
// }
// while(a != 0);
//  console.log(arr);



 //filter the numbers that are divisible by 10
 let num = [34,76,87,37,87,70,90,800,809,75,790,450,350,120];
 let newarr = num.filter((value)=>{
    return value%10==0;
 })
 console.log(newarr)


 //find square of given number in array and make new array

 let count = [1,2,3,4,5,6,7,8];
 let square = count.map((element)=>{
    return element * element;
 })
 console.log(square);


 //factorial of number in array

 let num2 = [1,2,3,5,6,7,8,9];
 let newnum = num2.reduce((a,b)=>{
    return a*b;
 })
console.log(newnum);


//print only even number 
let numbers = [12, 5, 8, 130, 44, 3, 9, 100];
numbers.forEach( (element)=>{
   if(element %2 == 0){
      console.log(element);
   }
})


let doublednum = numbers.map((num)=>{
   return num * 2;
})
console.log(doublednum);

let data = [23, 45, 67, 89, 12, 55, 40];
let filteredData = data.filter((num) => {
   return num > 50;
});


let prices = [10, 20, 30, 40];
let totalprice = prices.reduce((acc,crv)=>{
   return acc + crv;
})
console.log(totalprice);

let marks = [32, 45, 28, 50, 39];
let result = marks.map((num)=>{
   return num + 5;
}).filter((num) => {
   return num > 40;
});
console.log(result);

