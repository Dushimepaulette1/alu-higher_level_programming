#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Get the API URL from the first argument passed to the script
const apiUrl = process.argv[2];

// Make a GET request to the provided URL (which returns the list of tasks)
request.get(apiUrl, (error, response, body) => {
  // Check if there was an error in making the request
  if (error) {
    // If an error occurs, print the error object
    console.error(error);
  } else {
    // Parse the response body (it's returned as a string, so we need to convert it to JSON)
    const tasks = JSON.parse(body);
    // Create an object to store the count of completed tasks by user ID
    const completedTasks = {};

    // Loop through each task in the list
    tasks.forEach((task) => {
      // Only count tasks that are marked as completed
      if (task.completed) {
        // Check if the user ID already exists in the completedTasks object
        if (completedTasks[task.userId]) {
          // If it exists, increment the count of completed tasks for that user
          completedTasks[task.userId]++;
        } else {
          // If it doesn't exist, initialize the count for that user
          completedTasks[task.userId] = 1;
        }
      }
    });

    // Print the result, which is the number of completed tasks by user ID
    console.log(completedTasks);
  }
});
