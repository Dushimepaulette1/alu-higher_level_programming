#!/usr/bin/node

// Get the arguments passed to the script (excluding the first two elements: node path and script path)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const num = parseInt(args[0]);

// Check if the conversion is successful and if it's a valid number
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}
