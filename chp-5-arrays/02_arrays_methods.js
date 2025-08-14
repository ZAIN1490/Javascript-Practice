let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 //to convert into string=================================>
// let b = num.toString();
// console.log(typeof num);  //

//to join=================================================>
//let c = num.join("_");
//console.log(c);   //1_2_3_4_5_6_7_8_9

//to delete last element==================================>
// num.pop();
 console.log(num);

//to add value at last======================================>

 num.push(10);
 console.log(num);

//to delete first element====================================>

 //num.shift();
 console.log(num);

//to add value at firsts=====================================>

 //num.unshift(34);
 console.log(num);

// ==============================delete is an operator==========================

 let num2 = [34,265, 478, 97, 74, 46, 85, 95];
 delete num2[1];
 console.log(num2); //output = 34,empty,478,97,74,46,86,96

//to add two arrays=======================================>

console.log(num.concat(num2)); //returns new arrays

//to sort value in arrays==================================>

 num2.sort();                  //sorts alphabetically
 console.log(num2);           //changes the original array


//to compare it numerically we used compare function

// let compare = (a , b)=>{
//     return a - b;         //for descending order simply return b - a
// }
// num2.sort(compare);
// console.log(num2);



//to reverse the value of array===================================>

// num.reverse();
// console.log(num);


// ===========================slice and splice==========================

//num.splice(position,how many items to remove,which new item added);
 let num3 = [35,76,89,90,76,4,63,6,8,12,4,85,2];
 num3.splice(3,4,58,700,900,1000,2000,4000);
 console.log(num3)



// slice======================

let num4 = [34,97,108,959,37,900,879,3467,]
let newarr = num4.slice(3,6);            //it can make new array
console.log(newarr);