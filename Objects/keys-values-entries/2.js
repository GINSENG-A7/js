const count = (object) => {
	const fields = Reflect.ownKeys(object)
	return fields.length
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2
