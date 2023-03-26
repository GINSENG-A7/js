let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readSet = new WeakSet();

readSet.add(messages[1]);
readSet.add(messages[2]);
readSet.add(messages[2]);

messages.pop()

console.log(readSet.has(messages[1]));
console.log(readSet.has(messages[2]));