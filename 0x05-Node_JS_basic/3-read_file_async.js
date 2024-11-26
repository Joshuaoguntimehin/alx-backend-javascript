const readline = require('readline');
const fs = require('fs');

function countStudents(Path) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(Path, 'utf8');

    fileStream.on('error', (err) => {
      reject('Cannot load the database');
    });

    const rl = readline.createInterface({
      input: fileStream,
      output: process.stdout,
      terminal: false
    });

    const studentsByField = {};
    
    rl.on('line', (line) => {
      const student = line.split(',');
      
      // Ignore header and empty lines
      if (student[0] !== 'firstname' && student[0] !== '' && student.length > 1) {
        const field = student[3]; // Assuming the field is in the 4th column (index 3)
        const firstName = student[0];
        
        // If the field is not already in the object, initialize it
        if (!studentsByField[field]) {
          studentsByField[field] = {
            count: 0,
            firstNames: []
          };
        }

        // Add student to the respective field
        studentsByField[field].count += 1;
        studentsByField[field].firstNames.push(firstName);
      }
    });

    rl.on('close', () => {
      // Log the results for each field
      for (const field in studentsByField) {
        const { count, firstNames } = studentsByField[field];
        console.log(`Number of students in ${field}: ${count}. List: ${firstNames.join(', ')}`);
      }
      
      resolve();
    });
  });
}

module.exports = countStudents;
