const camelize = (str) => {
	const strArray = str.split('');
	
	
	const result = strArray.map((elem, index) => {
		if (elem === '-') {
			if (index < strArray.length - 1) {
				strArray[index + 1] = strArray[index + 1].toUpperCase();
			}
			strArray[index] = '';
			return;
		}
		return elem
	})

	return result.join('');
}

console.log(
	camelize("background-color") == 'backgroundColor',
	camelize("list-style-image") == 'listStyleImage',
	camelize("-webkit-transition") == 'WebkitTransition',
	camelize("-webkit-transition-") == 'WebkitTransition'
);