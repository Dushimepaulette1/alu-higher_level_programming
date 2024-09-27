#!/usr/bin/node
// This class defines a rectangle with width and height, and prints it using 'X' characters.

class Rectangle {
  // Constructor that initializes the rectangle with width (w) and height (h)
  constructor (w, h) {
    // Check if both w (width) and h (height) are positive integers greater than 0
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      // Initialize instance attributes width and height
      this.width = w;
      this.height = h;
    } else {
      // If invalid, create an empty object (no properties are set)
    }
  }

  // Instance method to print the rectangle using 'X' characters
  print () {
    // Ensure the rectangle is valid (has both width and height)
    if (this.width && this.height) {
      // Print 'X' characters in the shape of the rectangle
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width)); // Print one row of 'X'
      }
    }
  }
}

// Export the Rectangle class so it can be used in other files
module.exports = Rectangle;
