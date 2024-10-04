#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Get the movie ID (episode number) from the first argument passed to the script
const movieId = process.argv[2];

// Build the URL for the Star Wars API with the provided movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API to fetch the movie data
request.get(url, (error, response, body) => {
  // Check if there was an error in making the request
  if (error) {
    // If an error occurs (like network problems), print the error object
    console.error(error);
  } else {
    // Parse the response body (it's returned as a string, so we need to convert it to JSON)
    const movieData = JSON.parse(body);

    // Print the title of the movie
    console.log(movieData.title);
  }
});
