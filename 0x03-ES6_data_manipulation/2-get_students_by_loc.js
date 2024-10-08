export default function getStudentsByLocation(student) {
  const cityPass = student.filter((student) => student.location === 'San Francisco');
  return cityPass;
}
