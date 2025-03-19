let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

// const { score } = req.body;     // No idea what is the type of the variable score

let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // It do converted the string into number but it won't print the number
console.log(valueInNumber);             // As we all know "33abc" is not a number (NaN)

let a = undefined;
let _a = Number(a);
console.log(_a);    // NaN

let b = true;
let _b = Number(b);
console.log(_b);    // 1

let c = "25";
let _c = Number(c);
console.log(_c);    // 25

let d = "Farhan";
let _d = Number(d);
console.log(_d);    // NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);             // true;

let e = "0";
let _e = Boolean(e);
console.log(_e);    // true

let f = 0;
let _f = Boolean(f);
console.log(_f);    // false

let g = "";
let _g = Boolean(g);
console.log(_g);    // false

let h = "Farhan";
let _h = Boolean(h);
console.log(_h);    // true

// 1 => true; 0 => false
// "" => false          // empty string means false
// "hitesh" => true     // non-empty string means true
// "0" => true          // non-empty string means true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);      // 33 -> It is a string.
console.log(typeof stringNumber);   // string