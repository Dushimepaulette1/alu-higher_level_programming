#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Get the API URL from the first argument passed to the script
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles" is 18
const wedgeId = 18;

// Make a GET request to the Star Wars API to fetch the list of films
request.get(apiUrl, (error, response, body) => {
  // Check if there was an error in making the request
  if (error) {
    // If an error occurs (like network issues), print the error object
    console.error(error);
    return; // Exit the script if there's an error
  }

  // Parse the response body (it's returned as a string, so we need to convert it to JSON)
  let films;
  try {
    films = JSON.parse(body);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    return; // Exit if there's a JSON parsing error
  }

  // Check if the response contains the results (i.e., the list of films)
  if (!films || !films.results) {
    console.error('Error: No films data found');
    return; // Exit if no films data is found
  }

  // Initialize a counter for the movies where "Wedge Antilles" is present
  let count = 0;

  // Loop through each film in the list
  for (const film of films.results) {
    // Check if Wedge Antilles (character ID 18) is present in the film's characters
    if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeId}/`)) {
      count++; // Increment the counter if Wedge is found
    }
  }

  // Print the total number of movies where Wedge Antilles is present
  console.log(count); // This should output the correct count
});
