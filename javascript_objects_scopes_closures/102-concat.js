#!/usr/bin/node
// Import the 'fs' module to work with the file system
const fs = require('fs');

// Get the command-line arguments (the file paths)
const args = process.argv.slice(2);

// Read the contents of the first file synchronously
const fileA = fs.readFileSync(args[0], 'utf8');

// Read the contents of the second file synchronously
const fileB = fs.readFileSync(args[1], 'utf8');

// Concatenate the contents of both files
const fileC = `${fileA}${fileB}`;

// Write the concatenated content to the destination file synchronously
fs.writeFileSync(args[2], fileC);

// Print a message to indicate successful concatenation
console.log(`Contents of ${args[0]} and ${args[1]} have been concatenated into ${args[2]}`);
