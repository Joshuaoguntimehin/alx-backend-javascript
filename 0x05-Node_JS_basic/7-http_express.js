const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Function to read and parse the database file
function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
            const lines = data.split('\n').filter((line) => line.trim() !== '');
            const students = lines.slice(1).map((line) => line.split(','));
            const fields = {};

            for (const student of students) {
                if (student.length >= 4) {
                    const field = student[3];
                    if (!fields[field]) {
                        fields[field] = [];
                    }
                    fields[field].push(student[0]);
                }
            }

            const totalStudents = students.length;
            const summary = [`Number of students: ${totalStudents}`];

            for (const [field, names] of Object.entries(fields)) {
                summary.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }

            resolve(summary.join('\n'));
        });
    });
}

// Route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Route for the students endpoint
app.get('/students', async (req, res) => {
    const databasePath = path.resolve(process.argv[2]);
    try {
        const studentsData = await countStudents(databasePath);
        res.send(`This is the list of our students\n${studentsData}`);
    } catch (error) {
        res.status(500).send(`This is the list of our students\n${error.message}`);
    }
});

// Export the app
module.exports = app;

// Start the server if this file is executed directly
if (require.main === module) {
    const PORT = 1245;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
