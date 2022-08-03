export default function cleanSet(set, start) {
  if (start === undefined || start === '' || typeof (start) !== 'string') {
    return '';
  }
  const st = [];
  let str = ('');
  for (const item of set) {
    const com = start.length;
    if (item !== undefined) {
      if (item.startsWith(start)) {
        str = item.slice(com, (item.length));
        st.push(str);
      }
    }
  }
  if (st.length === 0) {
    return '';
  }
  return st.join('-');
}
