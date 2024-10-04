#!/usr/bin/node
// Export a function named nbOccurences
exports.nbOccurences = function (list, searchElement) {
  // Initialize a counter to keep track of the occurrences
  let count = 0;

  // Loop through each element in the list
  for (let i = 0; i < list.length; i++) {
    // If the current element matches the searchElement, increment the counter
    if (list[i] === searchElement) {
      count++;
    }
  }

  // Return the final count of occurrences
  return count;
};
