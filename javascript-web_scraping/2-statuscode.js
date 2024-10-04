#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Get the URL from the first argument passed to the script
const url = process.argv[2];

// Make a GET request to the provided URL
request.get(url, (error, response) => {
  // Check if there was an error in making the request
  if (error) {
    // If an error occurs (like a network issue), print the error object
    console.error(error);
  } else {
    // Print the status code of the HTTP response
    console.log('code:', response.statusCode);
  }
});
