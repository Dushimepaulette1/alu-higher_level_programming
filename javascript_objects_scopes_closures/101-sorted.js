#!/usr/bin/node
// Import the dictionary from the file 101-data.js
const dict = require('./101-data').dict;

// Create a new dictionary to hold the occurrences
const occurrences = {};

// Iterate over each user ID and its occurrences in the imported dictionary
for (const userId in dict) {
  const occurrenceCount = dict[userId];

  // If the occurrence count does not exist in the new dictionary, initialize it
  if (!occurrences[occurrenceCount]) {
    occurrences[occurrenceCount] = []; // Create an empty array for this occurrence count
  }  
  // Add the user ID to the corresponding occurrence count array
  occurrences[occurrenceCount].push(userId);
}

// Print the new dictionary of occurrences
console.log(occurrences);
