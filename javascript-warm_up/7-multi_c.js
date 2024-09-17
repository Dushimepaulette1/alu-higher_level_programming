#!/usr/bin/node

// Parse the first argument passed to the script and convert it to an integer
const arg = parseInt(process.argv[2]);

// Check if the argument is a valid number and greater than zero
if (isNaN(arg) || arg <= 0) {
  // If the argument is not a number or less than or equal to zero, print an error message
  console.log('Missing number of occurrences');
} else {
  // If the argument is a valid positive number, print "C is fun" that many times
  for (let i = 0; i < arg; i++) {
    console.log('C is fun');
  }
}
