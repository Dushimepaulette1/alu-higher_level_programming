#!/usr/bin/node

// Define a recursive function to compute the factorial
function factorial (n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

// Retrieve and parse the argument from the command line
const arg = parseInt(process.argv[2]);

// Check if the argument is a valid number
if (isNaN(arg)) {
  // If the argument is not a number, factorial of NaN is defined as 1
  console.log(1);
} else {
  // Calculate and print the factorial of the parsed integer
  console.log(factorial(arg));
}
