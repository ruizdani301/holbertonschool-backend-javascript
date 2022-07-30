export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(dato) {
    this._code = dato;
  }

  get name() {
    return this._name;
  }

  set name(dato2) {
    this._name = dato2;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
