let buttons = document.querySelectorAll('.remove-button');
for (const iterator of buttons) {
	iterator.addEventListener("click", () => {
		iterator.parentElement.style.display = 'none';
	});
}