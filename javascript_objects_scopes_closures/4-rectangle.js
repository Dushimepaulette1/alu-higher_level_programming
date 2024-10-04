#!/usr/bin/node
// A class that defines a rectangle and includes methods to manipulate the rectangle.

class Rectangle {
  // Constructor to initialize the rectangle with width (w) and height (h)
  constructor (w, h) {
    // Only assign width and height if they are positive integers greater than 0
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty object (no width or height properties) if invalid
    }
  }

  // Method to print the rectangle using 'X'
  print () {
    if (this.width && this.height) {
      // Print each row, where each row is 'X' repeated width times
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }

  // Method to rotate the rectangle by swapping the width and height
  rotate () {
    if (this.width && this.height) {
      // Swap the values of width and height
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
  }

  // Method to double the size of the rectangle (both width and height)
  double () {
    if (this.width && this.height) {
      // Multiply both width and height by 2
      this.width *= 2;
      this.height *= 2;
    }
  }
}

// Export the Rectangle class to be used in other files
module.exports = Rectangle;
