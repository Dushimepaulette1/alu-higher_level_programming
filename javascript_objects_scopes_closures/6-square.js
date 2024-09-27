#!/usr/bin/node
// Import the Square class from 5-square.js
const SquareBase = require('./5-square');

// Define a class Square that inherits from the previous Square class
class Square extends SquareBase {
  // Method to print the square using a specified character
  // If the character is not provided, it defaults to 'X'
  charPrint (c) {
    // Use 'X' if no character is provided
    const printChar = c === undefined ? 'X' : c;

    // Loop to print each row of the square
    for (let i = 0; i < this.height; i++) {
      console.log(printChar.repeat(this.width)); // Print a line of the character
    }
  }
}

// Export the Square class to be used in other files
module.exports = Square;
