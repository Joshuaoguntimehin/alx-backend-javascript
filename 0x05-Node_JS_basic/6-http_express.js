const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.write('Hello Holberton School!');
});

module.exports = app;

if (require.main === module) {
  const PORT = 1245; // Define the port
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
