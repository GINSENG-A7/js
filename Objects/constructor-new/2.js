function Calculator(firstNumber, secondNumber) {
  this.a = firstNumber;
  this.b = secondNumber;
  this.result = 0;

  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator(200, 30);

console.log(calculator.sum());
console.log(calculator.mul());
