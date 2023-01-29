const c = {
  foo: "bar",
};

function A() {
  return c;
}

function B() {
  return c;
}

let a = new A();
let b = new B();

console.log(a == b); // true
