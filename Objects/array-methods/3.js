const filterRangeInPlace = (arr, a, b) => {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];

		if (element < a || element > b) {
			arr.splice(index, 1);
		}
	}

	return arr
}

let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr,1 ,4));