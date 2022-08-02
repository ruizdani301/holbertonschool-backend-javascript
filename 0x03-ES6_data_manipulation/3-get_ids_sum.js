export default function getStudentIdsSum(list) {
  const valor = list.map((array) => array.id);
  return valor.reduce((a, b) => a + b);
}
