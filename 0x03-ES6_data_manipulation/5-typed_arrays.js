export default function createInt8TypedArray(l, p, v) {
  const buffer = new ArrayBuffer(l);
  const int8View = new Int8Array(buffer);
  if (v > 127 || v < (-127)) {
    throw Error('Position outside range');
  }
  int8View[p] = v;
  const data = new DataView(buffer);
  return data;
}
