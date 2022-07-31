export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this.name;
  }

  set name(dato) {
    this.name = dato;
  }

  get code() {
    return this.code;
  }

  set code(dato) {
    this.code = dato;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
