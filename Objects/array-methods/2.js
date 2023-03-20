const filterRange = (arr, a, b) => {
	const targetArray = arr.filter((num) => {
		if (num >= a && num <= b) {
			return true
		}
		return false
	})

	return targetArray
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr,1 ,4));