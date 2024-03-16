/*Write a program to take two inputs from the user and swap them without using a temporary or third variable.*/



const input = require("readline-sync");

let a = input.questionInt("enter the first number:"); 
let b = input.questionInt("enter the second vlaue: ");

[a,b]=[b,a]

console.log("a:",a);

console.log("b:",b);

