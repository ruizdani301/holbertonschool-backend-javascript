export default function hasValuesFromArray(set, list) {
  const ar = [];
  let i = 0;
  if (list.length === 1) {
    return set.has(list[0]);
  }
  for (const x of list) {
    ar.push(set.has(x));
    if (ar[i] === false) {
      return false;
    }
    i += 1;
  }
  return true;
}
