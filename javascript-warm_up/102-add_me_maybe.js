#!/usr/bin/node
// Function that increments the given number and then calls a passed function
exports.addMeMaybe = function (number, theFunction) {
  theFunction(number + 1); // Increment the number and call the passed function
};
