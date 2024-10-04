#!/usr/bin/node
// Import the list from the file 100-data.js
const list = require('./100-data').list;

// Create a new array where each element is the original element multiplied by its index
const newList = list.map((value, index) => value * index);

// Print the initial and new lists
console.log(list);
console.log(newList);
