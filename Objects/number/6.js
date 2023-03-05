const random = (min, max) => {
	const randomNumStr = String(min + Math.random() * (max - min));
	const splitedNumberStr = randomNumStr.split( '.' )
	console.log(randomNumStr);
	return Number(splitedNumberStr[0] + `.${splitedNumberStr[1][0]}`).toFixed()
}

console.log(random(-10, 10));