function compareFirstChildTRs(a, b) {
	return Number(a.querySelector('tr > td:first-child').textContent) - Number(b.querySelector('tr > td:first-child').textContent);
}

function compareSecondChildTRs(a, b) {
	let aTRtextContent = a.querySelector('tr > td:nth-child(2)').textContent;
	let bTRtextContent = b.querySelector('tr > td:nth-child(2)').textContent;
	if(aTRtextContent < bTRtextContent) {
		return -1;
	}
	if(aTRtextContent > bTRtextContent) {
		return 1;
	}
	return 0;
}

function GetOuterHTMLArray(element) {
	let resultArray = [];
	if (element.length != null && element.length != undefined) {
		for (let iterator of element) {
			resultArray.push(iterator.innerHTML);
		}
		return resultArray;
	}
	else {
		element = element.innerHTML;
		return element;
	}
}

function displayBySort(local_tbody, sortFunction) {
	let trsArray = Array.from(local_tbody.querySelectorAll('tr'));
	trsArray.sort(sortFunction);
	trsArray = GetOuterHTMLArray(trsArray);
	let icounter = 0;
	for (let tr of local_tbody.childNodes) {
		if(tr.tagName == 'TR') {
			tr.innerHTML = trsArray[icounter];
			icounter ++;
		}
	}
}

document.addEventListener("click", function(event) {
	const tbody = document.getElementsByTagName('tbody')[0];
	switch (event.target.dataset.type) {
		case "number":
			displayBySort(tbody, compareFirstChildTRs);
			break;
		case "string":
			displayBySort(tbody, compareSecondChildTRs);
			break;
	}
})