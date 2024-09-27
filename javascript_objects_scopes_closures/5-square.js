#!/usr/bin/node
// Import the Rectangle class from the previous file
const Rectangle = require('./4-rectangle');

// Define a class Square that inherits from Rectangle
class Square extends Rectangle {
  // Constructor for Square, takes 1 argument: size
  constructor (size) {
    // Call the constructor of Rectangle with size for both width and height
    super(size, size);
  }
}

// Export the Square class to be used in other files
module.exports = Square;
