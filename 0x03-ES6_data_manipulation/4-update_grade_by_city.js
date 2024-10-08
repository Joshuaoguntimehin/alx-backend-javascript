export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      const gradeUpdate = newGrades.find((grade) => grade.studentId === student.id);
      // If a matching grade is found, update it; otherwise, keep the original grade
      return {
        ...student,
        grade: gradeUpdate ? gradeUpdate.grade : student.grade || 'N/A',
      };
    });
}
