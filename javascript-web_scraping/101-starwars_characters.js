#!/usr/bin/node
// Import the 'request' module to handle HTTP requests
const request = require('request');

// Get the Movie ID from the first command-line argument
const movieId = process.argv[2];

// Check if the Movie ID is provided
if (!movieId) {
  console.error('Usage: ./101-starwars_characters.js <Movie ID>'); // Print usage instructions
  process.exit(1); // Exit the script with an error code
}

// Construct the URL for the specific movie using the Movie ID
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to the movie URL
request(movieUrl, (err, res, body) => {
  // Check if there was an error during the request
  if (err) {
    console.error(err); // Print the error if the request fails
    return; // Exit the callback function
  }

  // Parse the JSON response body
  let movie;
  try {
    movie = JSON.parse(body); // Attempt to parse the response
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError); // Handle JSON parsing errors
    return; // Exit if parsing fails
  }

  // Get the characters array from the movie data
  const characters = movie.characters;

  // Loop through each character URL and make a request to get the character names
  characters.forEach((characterUrl) => {
    request(characterUrl, (err, res, body) => {
      // Check if there was an error during the character request
      if (err) {
        console.error(err); // Print the error if the request fails
        return; // Exit the callback function
      }

      // Parse the JSON response for the character
      let character;
      try {
        character = JSON.parse(body); // Attempt to parse the character response
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError); // Handle JSON parsing errors
        return; // Exit if parsing fails
      }

      // Print the character name
      console.log(character.name); // Output the character's name
    });
  });
});
