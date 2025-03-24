const score = 400
console.log(score); // 400

const balance = new Number(100) // explicityly defining Number
console.log(balance);   // [Number: 100]

console.log(balance.toString().length);  //digits  -> 3
console.log(balance.toFixed(2));    // 100.00

const otherNumber = 123.89665
console.log(otherNumber.toPrecision(1));    // 1e+2 -> 1 * 10²
console.log(otherNumber.toPrecision(2));    // 1.2e+2 -> 1.2 * 10²
console.log(otherNumber.toPrecision(3));    // 124
console.log(otherNumber.toPrecision(4));    // 124.9
console.log(otherNumber.toPrecision(5));    // 123.90

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000 -> US
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 -> Indian

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);  // Object [Math] {} -> its an object and having many different properties
console.log(Math.abs(-4));  // 4 -> absolute value
console.log(Math.round(4.6));   // 5 -> round-off
console.log(Math.ceil(4.2));    // 5 -> least number
console.log(Math.ceil(-4.2));    // -4 -> least number
console.log(Math.floor(4.9));   // 4 -> excluding the decimal part
console.log(Math.min(4, 3, 6, 8));  // 3 -> Minimum
console.log(Math.max(4, 3, 6, 8));  // 8 -> Maximum
console.log(Math.sqrt(25));  // 5 -> square root of 25
console.log(Math.pow(8, 3));  // 8 to the power 3 = 512

console.log(Math.random());     // always between 0 and 1
console.log((Math.random()*10) + 1);    // mutliply by 10 make it between 1 and 11
console.log(Math.floor(Math.random()*10) + 1);  // using the floor property make it between only natural number b/w 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // random value between two integer