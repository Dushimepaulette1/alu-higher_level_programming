#!/usr/bin/node

// Get the arguments passed to the script (excluding the first two elements: node path and script path)
const args = process.argv.slice(2);

// Check if the first argument exists
if (args[0]) {
  console.log(args[0]); // Print the first argument
} else {
  console.log('No argument'); // Print "No argument" if no arguments were passed
}
