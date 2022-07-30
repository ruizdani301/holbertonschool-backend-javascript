export default function createIteratorObject(report) {
  let lista = [];
  for (const emp of Object.values(report.allEmployees)) {
    lista = lista.concat(emp);
  }
  return lista;
}
