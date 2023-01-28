let links = document.querySelectorAll('fieldset#contents > p > a');
for (const iterator of links) {
	iterator.addEventListener("click", () => {
		window.confirm("Leave for " + iterator.href) == false ? event.preventDefault() : open(iterator.href);
	});
}