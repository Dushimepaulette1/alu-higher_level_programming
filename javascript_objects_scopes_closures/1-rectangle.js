#!/usr/bin/node
// This script defines a Rectangle class with width and height attributes

// Define a class called Rectangle
class Rectangle {
  // The constructor method is called when a new Rectangle object is created.
  // It takes two parameters: w (width) and h (height)
  constructor (w, h) {
    // Initialize the instance attribute 'width' with the value of 'w'
    this.width = w;

    // Initialize the instance attribute 'height' with the value of 'h'
    this.height = h;
  }
}

// Export the Rectangle class so it can be used in other files
module.exports = Rectangle;
