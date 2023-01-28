let cA = document.querySelectorAll('.arrow');
let divCarusel = document.querySelector('div.carusel');
let liSelectedElement = document.querySelector('div.carusel > ul > li:first-child');
alert(liSelectedElement.outerHTML);
cA[1].addEventListener("click", {handleEvent: swipeRight});
cA[0].addEventListener("click", {handleEvent: swipeLeft});

function swipeRight(event) {
	let iterableElement = liSelectedElement;
	for (let i=0; i<3; i++) {
		if(iterableElement != null && iterableElement.tagName == "LI") {
			if(iterableElement.nextElementSibling != null && iterableElement.nextElementSibling.tagName == "LI") {
				iterableElement = iterableElement.nextElementSibling;
				if(i==2) {
					liSelectedElement = iterableElement;
					liSelectedElement.scrollIntoView({behavior: "smooth", inline: "start"});
				}
				else {
					continue;
				}	
			}
			else {
				break;
			}
		}
	}
}

function swipeLeft(event) {
	let iterableElement = liSelectedElement;
	for (let i=0; i<3; i++) {
		if(iterableElement != null && iterableElement.tagName == "LI") {
			if(iterableElement.previousElementSibling != null && iterableElement.previousElementSibling.tagName == "LI") {
				iterableElement = iterableElement.previousElementSibling;
				if(i==2) {
					liSelectedElement = iterableElement;
					liSelectedElement.scrollIntoView({behavior: "smooth", inline: "end"});
				}
				else {
					continue;
				}	
			}
			else {
				break;
			}
		}
	}
}