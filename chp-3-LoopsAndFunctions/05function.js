//A function in javascript are designed to peform specific task
function avg(x, y) {
    return (x + y)/2;
   
}

let a = 1;
let b =2;
let c =3;

console.log("The avg of a and b is", avg(a,b));
console.log("The avg of b and c is", avg(b,c));
console.log("The avg of c and a is", avg(c,a));



//even odd function
function evenodd(l,m){
    if(l % 2 == 0 && m % 2 == 0) {
        return "Both are even";
    }
    else if(l % 2 != 0 && m % 2 != 0) {
        return "Both are odd";
    }
    else if(l % 2 == 0 && m % 2 != 0) {
        return l + " is even and " + m + " is odd";
    }
    else {
        return l + " is odd and " + m + " is even";
    }
}
let d = 5;
let e = 6;
console.log(evenodd(d, e));



//arrow function
const arrowAvg = (j, k) => {
    return (j + k);
}
let j = 10;
let k = 20;
console.log("The arrow function avg of j and k is", arrowAvg(j, k));


//===================
function add(x, y) {
return(x + y);
}
let sum = add(5, 10);
console.log("The sum of 5 and 10 is", sum);


//=====================
function loginmsg(username){
    if(username === undefined || username === null || username.trim() === "") {
        return "Please provide a valid username.";
    }
    return "Welcome to the site, " + username + "!";
}
console.log(loginmsg(undefined));



