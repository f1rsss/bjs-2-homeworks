function parseCount(value) {  
  let parsed = Number.parseFloat(value);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  } else {
    return parsed;
  }
}

function validateCount(value) {
  try {
    let result = parseCount(value);
    return result;
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this._a = a;
    this._b = b;
    this._c = c;
  }
  
  get perimeter() {
    return this._a + this._b + this._c;
  }
  
  get area() {
    let p = this.perimeter / 2;
    const area = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
    return Math.round(area * 1000) / 1000;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}