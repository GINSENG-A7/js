// document.addEventListener('click', function(event) {
// 	if(event.target.tagName == 'A' && event.target.hasParent(thumbs)) {
// 		event.stopPropagation();
// 		event.preventDefault();
// 	}
// }, {capture: true});
let linksInThumbs = document.querySelectorAll('ul#thumbs > li > a');
for (let node of linksInThumbs) {
	node.addEventListener('click', function(event) {
		largeImg.src = node.href;
		event.preventDefault();
	})
}