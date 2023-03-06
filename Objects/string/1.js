const capitalize1 = (str) => {
	return String.fromCodePoint(Number(str[0].codePointAt(0)) - 32 ) + str.slice(1)
}

console.log(capitalize1("dfgdfgdfgdfg"));

const capitalize2 = (str) => {
	return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize2("adadasdsgdfgd"));