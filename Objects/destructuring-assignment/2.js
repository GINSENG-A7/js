const topSalary = (object) => {
	const objKeys = Object.keys(object);
	if (objKeys.length === 0) {
		return null
	}
	const objValues = Object.values(object);
	const maxValueIndex = objValues.indexOf(Math.max(...objValues));
	const name = objKeys[maxValueIndex];
	return name
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));