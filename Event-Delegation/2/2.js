document.addEventListener('click', function(event) {
	let target = event.target;
	if(target.tagName == "LI") {
		for (const child of target.childNodes) {
			if(child.tagName == "UL") {
				child.classList.toggle("hiddable");
			}
		}
	}
});