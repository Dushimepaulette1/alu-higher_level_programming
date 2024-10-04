#!/usr/bin/node
// Import the 'request' module to handle HTTP requests
const request = require('request');

// Get the API URL from the first command-line argument
const apiUrl = process.argv[2];

// Check if the API URL is provided
if (!apiUrl) {
  console.error('Usage: ./4-starwars_count.js <API URL>'); // Print usage instructions
  process.exit(1); // Exit the script with an error code
}

// Character ID for Wedge Antilles
const wedgeAntillesId = '18'; // ID for Wedge Antilles in the Star Wars API

// Make a GET request to the provided API URL (films endpoint)
request(apiUrl, (err, res, body) => {
  // Check if there was an error during the request
  if (err) {
    console.error(err); // Print the error if the request fails
    return; // Exit the callback function
  }

  // Parse the JSON response body to access film data
  const films = JSON.parse(body).results; // Extract the films array from the response
  let count = 0; // Initialize a counter for the number of films with Wedge Antilles

  // Loop through each film to check for Wedge Antilles' presence
  for (const film of films) {
    // Check if Wedge Antilles is in the film's characters list
    if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)) {
      count++; // Increment the count if found
    }
  }

  // Print the total number of films where Wedge Antilles is present
  console.log(count); // Output the count
});
