#!/usr/bin/node
const request = require('request');

// Get the Movie ID from the first command-line argument
const movieId = process.argv[2];

// Check if the Movie ID is provided
if (!movieId) {
  console.error('Usage: ./101-starwars_characters.js <Movie ID>');
  process.exit(1);
}

// Construct the URL for the specific movie using the Movie ID
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to the movie URL
request(movieUrl, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  let movie;
  try {
    movie = JSON.parse(body);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    return;
  }

  const characters = movie.characters;

  if (characters.length === 0) {
    console.log('Characters not found');
    return;
  }

  // Create an array to hold promises for character requests
  const characterPromises = characters.map((characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (err, res, body) => {
        if (err) {
          reject(err);
          return;
        }

        try {
          const character = JSON.parse(body);
          resolve(character.name); // Resolve with the character's name
        } catch (parseError) {
          reject(parseError);
        }
      });
    });
  });

  // Wait for all character requests to complete
  Promise.all(characterPromises)
    .then((characterNames) => {
      characterNames.forEach((name) => console.log(name)); // Print each character name
    })
    .catch((error) => {
      console.error('Error fetching character data:', error);
    });
});
