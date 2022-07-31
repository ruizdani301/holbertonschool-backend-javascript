export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  get brand() {
    return this._brand;
  }

  set brand(dato) {
    this._brand = dato;
  }

  get motor() {
    return this._motor;
  }

  set motor(dato) {
    this._motor = dato;
  }

  get color() {
    return this._color;
  }

  set color(dato) {
    this._color = dato;
  }
}
