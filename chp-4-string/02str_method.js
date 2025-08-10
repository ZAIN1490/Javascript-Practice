let name = "ZainMasood";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.slice(2, 5)); // from index 2 to 5 (5 excluded) => inM

let author = "harry";
console.log(author.replace("har", "per")); // perry
console.log(author.concat(" is a teacher of ", name)); // to add

let reader = "     Ali    ";
console.log(reader.trim()); // remove space from start and end

console.log(author[0]); // print h of harry

// for loop to print string characters
for (let i = 0; i < author.length; i++) {
  console.log(author[i]);
}

// ===================== More String Methods ======================

// charAt()
console.log(name.charAt(4)); // M (character at index 4)

// charCodeAt()
console.log(name.charCodeAt(0)); // Unicode value of 'Z'

// indexOf() & lastIndexOf()
let text = "JavaScript is awesome. I love JavaScript.";
console.log(text.indexOf("JavaScript")); // 0
console.log(text.lastIndexOf("JavaScript")); // last position

// startsWith() & endsWith()
console.log(name.startsWith("Zain")); // true
console.log(name.endsWith("Masood")); // true

// includes()
console.log(name.includes("Mas")); // true

// substring() (start, end)
console.log(name.substring(1, 4)); // ain

// substr() (start, length)
console.log(name.substr(0, 4)); // Zain (deprecated but still works)

// repeat()
console.log("Hi! ".repeat(3)); // Hi! Hi! Hi!

// split() & join()
let csv = "apple,banana,orange";
let fruits = csv.split(","); // ["apple", "banana", "orange"]
console.log(fruits);
console.log(fruits.join(" - ")); // apple - banana - orange

// padStart() & padEnd()
let num = "5";
console.log(num.padStart(4, "0")); // 0005
console.log(num.padEnd(4, "*")); // 5***

// match() & matchAll()
let sentence = "The rain in Spain falls mainly in the plain";
console.log(sentence.match(/ain/g)); // ["ain", "ain", "ain"]

for (let match of sentence.matchAll(/ain/g)) {
  console.log(match);
}

// search()
console.log(sentence.search(/Spain/)); // index of "Spain"

// toString() & valueOf()
let strObj = new String("Hello");
console.log(strObj.toString()); // "Hello"
console.log(strObj.valueOf()); // "Hello"