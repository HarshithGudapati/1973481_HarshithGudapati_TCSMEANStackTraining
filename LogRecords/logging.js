let fs = require("fs");
let obj = require("readline-sync");

let data  = fs.readFileSync("data.json");


let firstname = obj.question(" Enter the firstname :");
console.log("Your firstname is "+firstname);
let lastname = obj.question("Enter the lastname :");
console.log("Your lastname is "+lastname);
let gender = obj.question("Enter yourgender :");
console.log("Your gender is "+gender);
let email = obj.question("Enter the email :");
console.log("Your email is "+email);

let str   = data.toString();
let a1    = JSON.parse(str);

let b1= {"firstname":firstname,"lastname":lastname,"gender":gender,"email":email};
b1.dateLogged = Date().toString();
a1.push(b1);
c1 = JSON.stringify(a1);
fs.writeFileSync("data.json", c1);


