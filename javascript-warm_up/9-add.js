#!/usr/bin/node

// Define the function to add two integers
function add (a, b) {
  return a + b;
}

// Retrieve and parse the first and second arguments
const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);

// Check if both arguments are valid numbers
if (isNaN(firstArg) || isNaN(secondArg)) {
  // If any of the arguments is not a number, print NaN
  console.log('NaN');
} else {
  // If both arguments are valid, print the result of the addition
  console.log(add(firstArg, secondArg));
}
