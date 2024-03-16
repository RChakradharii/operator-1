/*Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication,
  division, integer division and modulus) on those two numbers.*/


const input = require("readline-sync");

let a = input.questionInt("enter the 1 number;");
let b = input.questionInt("enter the 2 number:");
a = a+b;
s=a-b;
ma = a*b;
d = a/b;
m=a%b;
i = Math.floor(a/b);

console.log(a,s,m, d, ma, i);
