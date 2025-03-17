/*
Prefer not to use var
because of issue in block scope and functional scope
*/

const accountId = 144553
let accountEmail = "farhan@gmail.com"   // scope variable don't have any effect outside the scope.
var accountPassword = "12345"       // scope variable ouside gets changed
accountCity = "Kolkata"     // Avoid using such kind of variable declaration
let accountState;

// accountId = 14   NOT ALLOWED as it is a constant
accountEmail = "gitfarhan@gmail.com"   // Allowed
accountPassword = 12121    // Allowed
accountCity = "Bengaluru"    //Allowed

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])