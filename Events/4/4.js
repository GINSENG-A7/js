let bodyCommonHTML = '▶ Сладости (нажми меня)! \n <ul> \n <li>Пирожное</li> \n <li>Пончик</li> \n <li>Мёд</li> \n </ul>';
let bodyClickedHTML = '▼ Сладости (нажми меня)! \n <ul> \n <li>Пирожное</li> \n <li>Пончик</li> \n <li>Мёд</li> \n </ul>'
let bodyIsExpanded = true;
document.addEventListener("DOMContentLoaded", hideBodyContent());

function showBodyContent() {
	document.body.innerHTML = bodyClickedHTML;
	for (var i = 1; i < document.body.childNodes.length; i++) {
		document.body.childNodes[i].style.display = 'block';
	}
	bodyIsExpanded = !bodyIsExpanded;
}
function hideBodyContent() {
	document.body.innerHTML = bodyCommonHTML;
	for (var i = 1; i < document.body.childNodes.length; i++) {
		document.body.childNodes[i].style.display = 'none';
	}
	bodyIsExpanded = !bodyIsExpanded;
}

document.body.addEventListener('click', () => {
	bodyIsExpanded == false ? showBodyContent() : hideBodyContent();
});