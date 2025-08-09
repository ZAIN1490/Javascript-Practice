 let name ="Zain Masood";         
 

 //can also write using single quote
 let author = 'Zain';
 console.log(author.length);       //length of strings


// ===========================Template Literals==========================

let student = "Ali";
let marks = 98;
console.log(`The marks of ${student} are ${marks}`);     //this quote is present between esc and tab button





// ===============================Escape sequence==========================

let writer = 'Adamd\'angelo';              //this print adam d'angelo
console.log(writer.length);               
 

let fullname = "Zain\nMasood";          //This moves Masood to next line
console.log(fullname)



let reader = "Noman\rALi"
console.log(reader)

let ali = "Is my friend";
console.log(ali.length);    //spaces also count
console.log(ali.charAt(3)); //find char at anyindex
console.log(ali.indexOf('f'));

let school = "sirsyedschool";
console.log(school.substring(0,4));  //print sirs 
console.log(school.slice(0,4));   //same as substring but also give negative value for reverse order
console.log(school.slice(-5,-1));


const hname = new String("hitesh");
console.log(hname);

const myname = "   Zain   ";
console.log(myname.trim());         //remove spaces
console.log(myname.trimStart());   // output = (Zain   )
console.log(myname.trimEnd());        //output = (   Zain)


const uniname = "Nationaluniversity";
console.log(uniname.padEnd(25,"."))    //string has 28 character so 25-17 = 8 dot willbe at end
console.log(uniname.padStart(25,".")); //same but at start

let fullpswd = "495995697934689";
let last4dgt = fullpswd.slice(-4);
let protectpswd = last4dgt.padStart(fullpswd.length, "*");
console.log(protectpswd);



const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


const para = "I think john dog is cuter than steve dog";
console.log(para.replace("john","my"));    //replace john with my
console.log(para.replaceAll("dog","cat"));  //I think john cat is cuter than steve cat


const grade = "Ali-Math-70-69";
console.log(grade.split("-"));  //['Ali', 'Math', '70', '69']




