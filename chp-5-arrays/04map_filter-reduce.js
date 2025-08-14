let arr = [45,78,456,97];

let newarr = arr.map((Element,index)=>{
    console.log(Element,index)
    return Element , index;
})

//the only difference between map method and for each loop is that
//for each modifies the arrays while map makes new one


// ============================filter method========================
//filter makes new array and not change real array
let num = [45,78,0,2,54,23,68,2,75,32,13,45,65,43];
let newarr2 = num.filter((value)=>{
    return value>50
})
console.log(newarr2)             //print value greater than 50 in array



// =============================reduce method===========================

let num2 = [1,2,5,67,46,84,84,85,894,9,38,90];
let arr4 = num2.reduce((a,b)=>{
    return a+b;
})
console.log(arr4)

let book = [
  {
    title: "The Great Gatsby",
    publishYear: 1925,
    genre: "Fiction",
    edition: "1st"
  },
  {
    title: "To Kill a Mockingbird",
    publishYear: 1960,
    genre: "Drama",
    edition: "2nd"
  },
  {
    title: "1984",
    publishYear: 1949,
    genre: "Dystopian",
    edition: "3rd"
  },
  {
    title: "A Brief History of Time",
    publishYear: 1988,
    genre: "Science",
    edition: "1st"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    publishYear: 1997,
    genre: "Fantasy",
    edition: "1st"
  }
];

/*
let bk = book.filter( (bk) =>{
    return bk.publishYear <=1950
})*/

let bk = book.filter( (bk)=>{
    return bk.edition ==='1st'
})
console.log(bk)



let arr5 = [6,8,25,64,85,9,4,9,3,97,23,55,45,36,79,21];
let myfunc = arr5.map((num) =>{
if(num%2!=0){
  return num + 1; 
  
    }
  else 
   return num;
})
console.log(myfunc)


