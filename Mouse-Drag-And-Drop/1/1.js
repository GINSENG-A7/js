let thumb = document.querySelector('div.thumb');
console.log(thumb);
let shiftX;
let newLeft;

function moveAt(pageX) {
	// курсор вышел из слайдера => оставить бегунок в его границах.
	if (newLeft < 0) {
	  newLeft = 0;
	}
	let rightEdge = slider.offsetWidth - thumb.offsetWidth;
	if (newLeft > rightEdge) {
	  newLeft = rightEdge;
	}
	this.style.left = newLeft + 'px';
};

thumb.moveAt = moveAt;


thumb.addEventListener('mousedown', function(event) {
	shiftX = event.clientX - thumb.getBoundingClientRect().left;
	function onMouseMove(event) {
		newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
		thumb.moveAt(event.pageX);
	}
	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
		thumb.onmouseup = null;
	}

	event.preventDefault();
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

thumb.ondragstart = function() {
	return false;
};