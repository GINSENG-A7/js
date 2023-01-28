//1
let ids = document.getElementById("age-table");
alert(ids.outerHTML);

//2
let labels = document.querySelectorAll('label');
for (let label of labels) {
	if(label.closest('table[id$="age-table"]') != null){
		alert(label.outerHTML);
	}
}

//3
let tds = document.querySelectorAll('td');
for (let td of tds) {
	if(td.closest('table[id$="age-table"]') != null){
		let tdParent = td.parentElement;
		let tdSearched = tdParent.firstElementChild;
		alert(tdSearched.textContent);
		break;
	}
}

//4
let forms = document.querySelectorAll('form[name$="search"]');
for (let form of forms) {
	alert(form.outerHTML);
}

//5
let inputs = document.querySelectorAll('input');
for (let input of inputs) {
	if(input.closest('form[name$="search"]') != null) {
		let inputParent = input.parentElement;
		let inputSearched = inputParent.firstElementChild;
		alert(inputSearched.outerHTML);
		break;
	}
}

//6
let inputs = document.querySelectorAll('input');
let reservedElement = null;
for (let input of inputs) {
	if(input.closest('form[name$="search"]') != null) {
		reservedElement = input;
	}
}
if (reservedElement != null) {
	let inputParent = reservedElement.parentElement;
	let inputSearched = inputParent.lastElementChild;
	alert(inputSearched.outerHTML);
}