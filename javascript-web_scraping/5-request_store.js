#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Import the 'fs' (file system) module to write to files
const fs = require('fs');

// Get the URL from the first argument passed to the script
const url = process.argv[2];

// Get the file path from the second argument passed to the script
const filePath = process.argv[3];

// Make a GET request to the provided URL
request.get(url, (error, response, body) => {
  // Check if there was an error in making the request
  if (error) {
    // If an error occurs, print the error object
    console.error(error);
  } else {
    // Write the body of the response (the content of the webpage) to the file in 'utf-8' encoding
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      // If an error occurs while writing to the file, print the error object
      if (err) {
        console.error(err);
      }
    });
  }
});
