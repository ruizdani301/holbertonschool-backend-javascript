export default function createInt8TypedArray(l, p, v) {
  if (p > l - 1) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(l);
  const int8View = new Int8Array(buffer);
  int8View[p] = v;
  const data = new DataView(buffer);
  return data;
}
