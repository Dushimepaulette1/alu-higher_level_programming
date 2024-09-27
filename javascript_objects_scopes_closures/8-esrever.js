#!/usr/bin/node
// Export a function named esrever
exports.esrever = function (list) {
  // Create an empty array to store the reversed list
  const reversedList = [];

  // Loop through the original list from the last element to the first
  for (let i = list.length - 1; i >= 0; i--) {
    // Push each element to the new reversedList array
    reversedList.push(list[i]);
  }

  // Return the reversed list
  return reversedList;
};
