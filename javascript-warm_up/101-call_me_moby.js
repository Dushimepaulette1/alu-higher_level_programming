#!/usr/bin/node
// Function that executes a passed function 'x' times
exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction(); // Call the passed function
  }
};
