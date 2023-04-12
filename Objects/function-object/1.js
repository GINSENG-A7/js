function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function set(val) {
    this.count = val;
  };

  counter.decrease = function decrease() {
    this.count--;
  };

  return counter;
}

let counter = makeCounter();

counter.set(10);
console.log(counter()); // 10
console.log(counter());
console.log(counter());
console.log(counter());
counter.decrease();
counter.decrease();
console.log(counter());