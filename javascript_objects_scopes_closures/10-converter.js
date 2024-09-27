#!/usr/bin/node
// Export a function named converter that takes a base as an argument
exports.converter = function (base) {
  // Return a function that takes a number and converts it to the specified base
  return function (num) {
    // Use recursion to convert the number from base 10 to the desired base
    return (num < base) ? num.toString(base) : exports.converter(base)(Math.floor(num / base)) + (num % base).toString(base);
  };
};
