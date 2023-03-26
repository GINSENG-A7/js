let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readSet = new WeakMap();

readSet.set(messages[0], new Date());
readSet.set(messages[1], new Date());
readSet.set(messages[2], new Date());

messages.pop()

console.log(readSet.has(messages[0]));
console.log(readSet.has(messages[1]));
console.log(readSet.has(messages[2]));