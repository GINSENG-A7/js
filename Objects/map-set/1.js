function unique(arr) {
	const newArray = [];
  const uniqueSet = new Set();
	arr.forEach(element => {
		if(!uniqueSet.has(element)) {
			newArray.push(element)
		}
		uniqueSet.add(element)
	});
	return newArray
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O