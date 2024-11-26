const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMessage() {
    rl.question("Welcome to Holberton School, what is your name?:\n", (name) => {
        console.log("Your name is:, " + name + "!");
        rl.close(); // Close the input stream
    });
}
// Call the function
displayMessage();
