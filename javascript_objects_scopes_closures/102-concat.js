#!/usr/bin/node
// Import the required 'fs' module for file system operations
const fs = require('fs');

// Get the file paths from the command-line arguments
const [,, fileA, fileB, fileC] = process.argv;

// Read the contents of the first file
fs.readFile(fileA, 'utf8', (err, dataA) => {
  if (err) {
    console.error(`Error reading ${fileA}: ${err.message}`);
    return;
  }

  // Read the contents of the second file
  fs.readFile(fileB, 'utf8', (err, dataB) => {
    if (err) {
      console.error(`Error reading ${fileB}: ${err.message}`);
      return;
    }

    // Concatenate the contents and write to the destination file
    fs.writeFile(fileC, dataA + dataB, (err) => {
      if (err) {
        console.error(`Error writing to ${fileC}: ${err.message}`);
        return;
      }

      console.log(`Contents of ${fileA} and ${fileB} have been concatenated into ${fileC}`);
    });
  });
});
