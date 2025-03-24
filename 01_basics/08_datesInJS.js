// Dates

let myDate = new Date()
console.log(myDate);    // 2025-03-24T11:02:42.387Z
console.log(myDate.toString()); // Mon Mar 24 2025 11:04:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Mar 24 2025
console.log(myDate.toISOString());  // 2025-03-24T11:06:46.922Z
console.log(myDate.toJSON());   // 2025-03-24T11:06:46.922Z
console.log(myDate.toLocaleDateString());   // 3/24/2025
console.log(myDate.toLocaleString());   // 3/24/2025, 11:06:46 AM

console.log(typeof myDate);     // object

let myCreateDate = new Date(2023, 0, 23);   // months starts from 0
console.log(myCreateDate.toDateString());   // Mon Jan 23 2023

let newDate = new Date(2024, 9, 12, 20, 30);
console.log(newDate.toLocaleString());  // 10/12/2024, 8:30:00 PM

// let anotherDate = new Date("2023-11-26");
let anotherDate = new Date("11-26-2024");   // month starts from 1
console.log(anotherDate.toLocaleString());  //11/26/2024, 12:00:00 AM

// Time-Stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);   // 1742815298949 -> milliseconds started from 1st Jan, 1970
console.log(myDate.getTime()); // 1742815441935

console.log(Math.floor((((Date.now()/1000)/60/60)/24)))

