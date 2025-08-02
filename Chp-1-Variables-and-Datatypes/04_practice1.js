// =============try add number to string===============================
let str = "Zain";
let num = 3;
let res = str + num;
console.log(res);

// =====================find type of last question=======================
console.log(typeof res);

// create a contst object in javascript can u change it to hold number later

const obj = {
    Name : 'Zain',
    class : 10,
}
// obj = 13;
// console.log(obj)           //No

// ============================add a new key in const obj==========================

obj['marks'] = 456;
console.log(obj);                    //Yes

// ===============================create dictionary of 3 words================
const dict = {
    fear:"dar",
    bravely:"Bahaduri",
    adorable:"beautiful",
}
console.log(dict);
console.log(dict['fear']);