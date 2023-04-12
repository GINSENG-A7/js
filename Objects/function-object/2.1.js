function sum() {
  sum.calls++;
  // console.log(sum.calls);
  let value = 0;

  // console.log(arguments);
  if (arguments.length > 1) {
    value = Array.from(arguments).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum.bind(this, value);
  }

  if (sum.calls > 1 && arguments.length === 1) {
    sum.calls = 0;
    return arguments[arguments.length - 1];
  }

  value = +arguments[0];
  return sum.bind(this, value);
}

sum.calls = 0;

console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6
console.log(sum(5)(-1)(2)()); // 6
console.log(sum(6)(-1)(-2)(-3)()); // 0
console.log(sum(0)(1)(2)(3)(4)(5)()); // 15
