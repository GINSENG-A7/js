const extractCurrencyValue = (str) => {
	const firstDigit = str.match(/\d/)
	const firstDigitIndex = str.indexOf(firstDigit)
	return parseInt(str.slice(firstDigitIndex))
}

console.log(extractCurrencyValue('$120') ); // true