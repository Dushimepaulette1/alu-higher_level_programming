#!/usr/bin/node

// Function to find the second biggest integer in an array of integers
function findSecondBiggest (arr) {
  // Initialize two variables to hold the biggest and second biggest values
  let biggest = -Infinity;
  let secondBiggest = -Infinity;

  // Loop through the array to find the biggest and second biggest values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      secondBiggest = biggest;
      biggest = arr[i];
    } else if (arr[i] > secondBiggest && arr[i] < biggest) {
      secondBiggest = arr[i];
    }
  }

  // Return the second biggest value
  return secondBiggest;
}

// Get the arguments from the command line, excluding the first two elements (node and script name)
const args = process.argv.slice(2).map(Number);

// Check the length of the arguments array
if (args.length <= 1) {
  console.log(0);
} else {
  // Find and print the second biggest integer
  const result = findSecondBiggest(args);
  console.log(result === -Infinity ? 0 : result);
}
