#!/usr/bin/node
// Check the number of arguments passed to the script
const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two (node and script path)

// Determine the message based on the number of arguments
if (args.length === 0) {
    console.log('No argument');
} else if (args.length === 1) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}

