const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to count students and format the output
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip header line
      const fields = {};

      students.forEach((line) => {
        const [name, , , field] = line.split(',');
        if (name && field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(name);
        }
      });

      let output = `Number of students: ${students.length}\n`;
      Object.entries(fields).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const databasePath = path.resolve(process.argv[2]); // Database file path passed as argument
    try {
      const studentData = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentData}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error}`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Error handler for server-level errors
app.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port 1245 is already in use. Please free the port or use a different one.`);
  } else {
    console.error(`An error occurred: ${err.message}`);
  }
});

// Start the server
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

