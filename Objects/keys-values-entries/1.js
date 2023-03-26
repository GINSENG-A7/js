const sumSalaries = (object) => {
	const objArr = Object.values(object);
	const summ = objArr.reduce((accum, field) => accum + field, 0)
	return summ
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650