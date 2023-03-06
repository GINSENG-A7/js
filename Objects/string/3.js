const truncate = (str, maxlength) => {
	// console.log(str.length, maxlength);
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 2) + '...';
	}
	return str
}

console.log(truncate('sdffdhfg', 15));

console.log(truncate('sdffdhfg', 8));

console.log(truncate('sdffdhfg', 7));

console.log(truncate('sdffdhfg', 6));