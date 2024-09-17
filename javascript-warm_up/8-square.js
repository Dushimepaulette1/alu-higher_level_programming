#!/usr/bin/node

// Parse the first argument passed to the script and convert it to an integer
const size = parseInt(process.argv[2]);

// Check if the argument is a valid number and greater than zero
if (isNaN(size) || size <= 0) {
  // If the argument is not a number or less than or equal to zero, print an error message
  console.log('Missing size');
} else {
  // If the argument is a valid positive number, print the square
  for (let i = 0; i < size; i++) {
    // Print a row of 'X' characters
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
