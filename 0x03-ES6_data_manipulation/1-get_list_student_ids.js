export default function getListStudentIds(student) {
  if (!Array.isArray(student)) {
    return [];
  }
  return student.map((student) => student.id);
}
