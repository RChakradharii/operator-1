/*Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.*/


const input = require("readline-sync");

let a = input.questionInt("enter the first number:");
 let b = input.questionInt("enter the second number:");
q =Math.floor (a/b);
r = a%b;

console.log(q,r);

