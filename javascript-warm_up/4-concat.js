#!/usr/bin/node

// Get the arguments passed to the script (excluding the first two elements: node path and script path)
const args = process.argv.slice(2);

// Print the arguments in the format "arg1 is arg2"
console.log(`${args[0] || 'undefined'} is ${args[1] || 'undefined'}`);
