function sum() {
  return Array.from(arguments).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function curry(func) {
  return function curried(...args) {
    return function (...args2) {
      if (args2.length === 0) {
        return func.apply(this, args);
      }
      return curried.apply(this, args.concat(args2));
    };
  };
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)()); // 3
console.log(curriedSum(1)(2)(3)()); // 6
console.log(curriedSum(5)(-1)(2)()); // 6
console.log(curriedSum(6)(-1)(-2)(-3)()); // 0
console.log(curriedSum(0)(1)(2)(3)(4)(5)()); // 15
