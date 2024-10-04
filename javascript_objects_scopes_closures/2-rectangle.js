#!/usr/bin/node
// This script defines a Rectangle class with width and height attributes,
// and checks if the values are valid positive integers.

class Rectangle {
  // The constructor is called when a new Rectangle object is created
  // It takes two parameters: w (width) and h (height)
  constructor (w, h) {
    // Check if both width and height are positive integers greater than 0
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      // If valid, initialize width and height with the given values
      this.width = w;
      this.height = h;
    } else {
      // If not valid, create an empty object (no attributes are set)
      // This will result in an empty Rectangle object
    }
  }
}

// Export the Rectangle class so it can be used in other files
module.exports = Rectangle;
