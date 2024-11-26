const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines, skipping empty lines
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    
    // Extract headers and student records
    const headers = lines[0].split(',');  // Assuming the first line contains headers
    const students = lines.slice(1);     // All the rest are student records

    // Create an object to count students in each field
    const fieldCounts = {};

    // Iterate over the student records
    students.forEach((line) => {
      const studentData = line.split(',');
      const field = studentData[3]; // Assuming the 'Field' is the 4th column
      const firstName = studentData[0]; // Assuming 'First Name' is the 1st column
      
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      
      fieldCounts[field].push(firstName);
    });

    // Calculate the total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field along with the list of their first names
    Object.keys(fieldCounts).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
    });
  } catch (error) {
    // If the file is not found or any other error occurs
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
