const arrow = document.querySelector("#arrowTop");
arrow.style.display = "none";
arrow.addEventListener("click", (event) => {
	scrollTo(0, 0);
});

let docHeight = document.documentElement.clientHeight;
document.addEventListener("scroll", () => {
	console.log(docHeight);
	console.log(this.scrollY);
	if (document.documentElement.clientHeight <= this.scrollY) {
		arrow.style.display = "block";
	}
	else {
		arrow.style.display = "none";
	}
})