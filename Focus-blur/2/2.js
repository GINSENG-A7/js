let table = document.querySelector('#bagua-table');
let selectedTd;
let tempTextarea;
let loacalHTML;
let editionIsOpen = false;
table.addEventListener("click", (event)=> {
	
	if (event.target.tagName == "BUTTON") {
		if (event.target.id == "ok") {
			editionIsOpen = false;
			selectedTd.innerHTML = tempTextarea.value;
		}
		else if (event.target.id == "cancel") {
			editionIsOpen = false;
			selectedTd.innerHTML = loacalHTML;
		}
	}
	else if (editionIsOpen == true) {
		return;
	}

	if (event.target.tagName == "TEXTAREA") {
		return;
	}

	let td = event.target.closest('td');
	
	if (!td) return;
	
	if (!table.contains(td)) return;
	
	// highlight(td);
	loacalHTML = editAsTextarea(td);

});

function editAsTextarea(td) {
	selectedTd = td;
	editionIsOpen = true;

	let htmlTd = td.innerHTML;
	tempTextarea = document.createElement("textarea");
	tempTextarea.classList.add("temp_textarea");
	tempTextarea.value = htmlTd;
	td.prepend(tempTextarea);
	td.innerHTML = "";

	let buttonOk = document.createElement("button");
	buttonOk.id = "ok";
	buttonOk.classList.add("button");
	buttonOk.innerHTML = "OK";

	let buttonCancel = document.createElement("button");
	buttonCancel.id = "cancel";
	buttonCancel.classList.add("button");
	buttonCancel.innerHTML = "CANCEL";

	td.prepend(tempTextarea);
	td.append(buttonOk);
	td.append(buttonCancel);

	return htmlTd;
}

function highlight(td) {
	if (selectedTd != null || selectedTd != undefined) {
		selectedTd.classList.remove('highlight');
		if (td == selectedTd) {
			selectedTd = null;
			return;
		}
	}
	selectedTd = td;
	selectedTd.classList.add("highlight");
}

// function highlight(td) {
// 	if (selectedTd) { // убрать существующую подсветку, если есть
// 		if (selectedTd == td) {
// 			if (selectedTd.classList.contains("highlight")) {
// 				selectedTd.classList.remove('highlight');
// 				selectedTd = null;
// 			}
// 		}
// 		else {
// 			selectedTd.classList.remove('highlight');
// 			selectedTd = td;
// 			selectedTd.classList.add('highlight'); // подсветить новый td	
// 		}
// 	}
// 	else {
// 		selectedTd = td;
// 		selectedTd.classList.add('highlight'); // подсветить новый td	
// 	}
// }