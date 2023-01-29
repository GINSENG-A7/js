let calculator = {
  a: 0,
  b: 0,
  result: 0,
  read(firstNumber, secondNumber) {
    this.a = firstNumber;
    this.b = secondNumber;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

let calIngenier = {
  douubleSum() {},
};

Object.setPrototypeOf(calIngenier, calculator);

calculator.read(100, 200);
console.log(calIngenier.sum());

console.log(calculator.sum());
console.log(calculator.mul());
