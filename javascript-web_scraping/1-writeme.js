#!/usr/bin/node

// Import the 'fs' (file system) module to interact with the file system
const fs = require('fs');

// Get the file path from the first argument passed to the script
const filePath = process.argv[2];

// Get the string to write from the second argument passed to the script
const fileContent = process.argv[3];

// Write the string to the file in 'utf-8' format
fs.writeFile(filePath, fileContent, 'utf-8', (err) => {
  // Check if there is an error during the file writing process
  if (err) {
    // If an error occurs (like a permission issue), we print the error object
    console.error(err);
  }
});
