//there are two types of data
//1.Primitive data types
//2.Non primitive data tpes(objects)

//================= Types of primitive data types=====================
//a.Null
//b.Numbers
//c.booleans 
//d.bigInts
//e.Strings
//f.Symbol
//g.Undefined

let a = null;
let b = 5;
let c = true           //or false
let d = BigInt("670") + BigInt("430");
let e = "Zain";
let f = Symbol("This is symbol");
let g;
console.log(a,b,c,d,e,f,g);
console.log(typeof(c));           //to find types of any variable



// ======================objects in js==========================

const item={
    name:"Coca cola",
    price:"140 Rs",
    
}
console.log(item);               //to print whole object
console.log(item["price"]);     //to print any key value in object



//Quick quiz======================================================

//Write program to store name,phone number and marks of student

const std = {
    name:"ALi",
    PhoneNo:"0389975927",
    marks:467,
}
console.log(std);