const readline = require('readline');

// Create an interface for reading from and writing to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message and prompt the user for their name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Once the user provides their name, display the closing message and close the interface
  rl.on('close', () => {
    console.log('This important software is now closing');
  });

  // Close the readline interface after the user input is processed
  rl.close();
});
