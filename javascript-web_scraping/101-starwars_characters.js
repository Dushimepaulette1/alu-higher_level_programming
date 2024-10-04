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

  // Check if the characters array is empty
  if (characters.length === 0) {
    console.log('Characters not found'); // Log message if no characters are found
    return; // Exit if no characters
  }

  // Array to hold character names
  const characterNames = [];

  // Loop through each character URL and make a request to get the character names
  let completedRequests = 0; // To keep track of completed requests

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

      // Add the character name to the array
      characterNames.push(character.name); // Output the character's name

      // Increment the completed requests counter
      completedRequests++;

      // Check if all requests have completed
      if (completedRequests === characters.length) {
        // Print all character names in order
        characterNames.forEach((name) => console.log(name)); // Output each character name
      }
    });
  });
});
