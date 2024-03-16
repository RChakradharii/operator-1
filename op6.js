/*Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can 
be divided evenly by B. Can you figure out that number?*/



const input = require("readline-sync");

let a = input.questionInt("enter the 1 value:");
let b = input.questionInt("enter the 2 value:");
i = Math.floor(a/b);
n = i*b

console.log(n);
