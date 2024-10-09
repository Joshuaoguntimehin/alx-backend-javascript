// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Add the students to an array
const studentsList: Student[] = [student1, student2];

// Create a table dynamically
const table = document.createElement("table");

// Loop through the students array and add rows to the table
studentsList.forEach(student => {
    const row = table.insertRow(); // Create a new row
    const cell1 = row.insertCell(); // Create a new cell for the first name
    const cell2 = row.insertCell(); // Create a new cell for the location

    // Set the text content of the cells
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the body of the HTML document
document.body.appendChild(table);
