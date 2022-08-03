export default function updateUniqueItems(mapi) {
  if (mapi instanceof Map) {
    const mp = mapi.forEach((value, key) => {
      if (value === 1) {
        mapi.set(key, 100);
      }
    });
    return mp;
  }
  throw Error('Cannot process');
}
