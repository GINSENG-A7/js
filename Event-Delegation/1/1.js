let buttons = document.querySelectorAll('.remove-button');
document.addEventListener('click', function(event) {
	let psDataSet = event.target.dataset.remove;
	if(psDataSet == "delete-div") {
		let x = event.target;
		// let closest_p =  x.closest("p");
		x.parentElement.style.display = 'none';
	}
});