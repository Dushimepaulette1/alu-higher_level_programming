#!/usr/bin/node

// Get the first argument passed to the script
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
  // Print error message if it's not a number
  console.log('Missing number of occurrences');
} else {
  // Loop x times and print 'C is fun'
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
