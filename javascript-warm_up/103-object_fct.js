#!/usr/bin/node

// Define the object with an initial value of 12
const myObject = {
  type: 'object',
  value: 12
};

// Print the initial state of the object
console.log(myObject);

// Define a function incr that increments the value property of the object
myObject.incr = function() {
  this.value += 1; // Increment the value by 1
};

// Call the incr function and print the object after each call
myObject.incr(); // Increment the value to 13
console.log(myObject); // Print the object

myObject.incr(); // Increment the value to 14
console.log(myObject); // Print the object

myObject.incr(); // Increment the value to 15
console.log(myObject); // Print the object

