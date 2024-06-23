// Qustion 2

let myName:string = "Tahirah Roohi";
console.log(`Hello ${myName}, Would you like to learn some typescript today?`);


// Question 3

let personName:string = "Tahirah Roohi";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" "))

