// Stack(Primitive) & Heap(Non-Primitive)

let myYoutubeName = "pseudofarhan"; // Its the original one
let anotherName = myYoutubeName;    // Its just creates a copy
anotherName = "gitfarhan"

console.log(myYoutubeName); // pseudofarhan
console.log(anotherName);   // gitfarhan

// Heap
let userOne = {
    name: "Farhan",
    mail: "pseudofarhan@gmail.com"
}

let  userTwo = userOne;  // both userOne and userTwo is refering to a single data if one is changed two also shows the same changes

userOne.mail = "gitfarhan@gmail.com";   // will affect both the objects.

console.log(userOne);   // { name: 'Farhan', mail: 'gitfarhan@gmail.com' }
console.log(userTwo);   // { name: 'Farhan', mail: 'gitfarhan@gmail.com' }

console.log(userOne.mail);  // gitfarhan@gmail.com
console.log(userTwo.mail);  // gitfarhan@gmail.com