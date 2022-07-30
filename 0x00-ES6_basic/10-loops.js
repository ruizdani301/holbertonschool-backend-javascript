export default function appendToEachArrayValue(array, appendString) {
  const arreglo = [];
  for (const idx of array) {
    arreglo.push(appendString + idx);
  }
  return arreglo;
}
