export default function getStudentIdsSum(student) {
  const value = student.reduce((sum, student) => sum + student.id, 0);
  return value;
}
