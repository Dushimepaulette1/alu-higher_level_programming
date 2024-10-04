#!/usr/bin/node

// Import the 'fs' (file system) module to interact with the file system
const fs = require('fs');

// Get the file path from the first argument passed to the script
const filePath = process.argv[2];

// Read the file content in 'utf-8' format (which is common for text files)
fs.readFile(filePath, 'utf-8', (err, data) => {
  // Check if there is an error during the file reading process
  if (err) {
    // If an error occurs (like the file not being found), we print the error object
    console.error(err);
  } else {
    // If no error, print the content of the file
    console.log(data);
  }
});
