export default function appendToEachArrayValue(array, appendString) {
    let arreglo = [];
    for (const idx of array) {
        arreglo.push(appendString + idx);
    }

    return arreglo;
}
