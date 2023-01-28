let houses = document.querySelectorAll('#house');
let roofs = document.querySelectorAll('#roof');
let linksWithAttribute = document.querySelectorAll('a[data-tooltip]');

let newDiv = document.createElement('div');
newDiv.classList.add('tooltip');

function timer(elemById) {
		return setTimeout(() => {
		elemById.prepend(newDiv);
		showTooltip(newDiv, elemById);
	}, 500);
}


function showTooltip(tooltip, targetElem) {
	let anchorElem = tooltip.parentNode;
	tooltip.className = 'tooltip';
	newDiv.textContent = targetElem.dataset.tooltip;
	document.body.append(tooltip);

	let coords = anchorElem.getBoundingClientRect();

	// позиционируем подсказку над центром элемента
	let left = coords.left + (anchorElem.offsetWidth - tooltip.offsetWidth) / 2;
	if (left < 0) left = 0;

	let top = coords.top - tooltip.offsetHeight - 5;
	if (top < 0) {
	  top = coords.top + anchorElem.offsetHeight + 5;
	}

	tooltip.style.left = left + 'px';
	tooltip.style.top = top + 'px';

	return tooltip;
}

let houseTimerId;
for (const house of houses) {
	house.addEventListener('mouseover', function (event) {
		event.stopPropagation();
		houseTimerId = timer(house);
	});
	house.addEventListener('mouseout',   function (event) {
		clearTimeout(houseTimerId);
		newDiv.remove();
	});
}
let roofTimerId;
for (const roof of roofs) {
	roof.addEventListener('mouseover', function (event) {
		event.stopPropagation();
		roofTimerId = timer(roof);
	});
	roof.addEventListener('mouseout', function (event) {
		clearTimeout(roofTimerId);
		newDiv.remove();
	});
}
let aTimerId;
for (const a of linksWithAttribute) {
	a.addEventListener('mouseover', function (event) {
		event.stopPropagation();
		aTimerId = timer(a);
	});
	a.addEventListener('mouseout', function (event) {
		clearTimeout(aTimerId);
		newDiv.remove();
	});
}