const http = require('http'); // Import the http module

const hostname = '127.0.0.1'; // Define the hostname
const port = 1245; // Define the port

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end('Hello Holberton School!'); // Send the response
});

// Start the server and listen on the specified port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the app for external usage
module.exports = app;
