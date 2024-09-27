#!/usr/bin/node
// Initialize a variable to keep track of the number of printed arguments
let counter = 0;
// Export a function named logMe
exports.logMe = function (item) {
// Print the current count (number of arguments already printed) and the current argument value
  console.log(`${counter}: ${item}`);
  // Increment the counter after printing the current argument
  counter++;
};
