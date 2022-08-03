export default function updateUniqueItems(mapi) {
  const mp = mapi.forEach((value, key) => {
    if (value === 1) {
      mapi.set(key, 100);
    }
  });
  return mp;
}
