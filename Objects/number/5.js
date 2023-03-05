const random = (min, max) => {
	return min + Math.random() * (max - min);
}

console.log(random(-10, 10));