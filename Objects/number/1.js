const getCountOfFloatNumber = (num) => {
	const strNum = String(num);
	const floatNumbersCount = strNum.split( '.' ).pop().length;
	return floatNumbersCount
}

const firstStr = prompt('Число 1:', '0');
const secondStr = prompt('Число 2:', '0');

const firstNum = Number(firstStr);
const secondNum = Number(secondStr);
const maxFloatCount = Math.max(getCountOfFloatNumber(secondNum), getCountOfFloatNumber(firstNum));

const result = (firstNum * maxFloatCount * 10 + secondNum * maxFloatCount * 10) / maxFloatCount

console.log(result);
