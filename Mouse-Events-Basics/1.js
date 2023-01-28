let ul = document.querySelector('ul#ul');
// console.log(ul);
document.addEventListener("click", function(event) {
	let selectedCollection = ul.querySelectorAll('.selected');
	if(event.ctrlKey) {
		event.target.classList.add('selected');
	}
	else {
		if(selectedCollection.length > 0) {
			for (const li of selectedCollection) {
				li.classList.remove('selected');
			}
			if(event.target.parentNode === ul) {
				event.target.classList.toggle('selected');
			}
		}
		else {
			if(event.target.parentNode === ul) {
				event.target.classList.toggle('selected');
			}
		}
	}
});