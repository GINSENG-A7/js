let docHeight = document.documentElement.clientHeight;
const body = document.querySelector('body');
spawn_new();


window.addEventListener('scroll', function() {
	docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	console.log(docHeight);
	console.log(this.scrollY);
	if (docHeight - this.scrollY <= 100) {
		// alert("end");
		spawn_new();
	}
});

document.addEventListener('keydown', function(event) {
	if (event.code == 'pageDown') {
	  alert('Отменить!')
	}
  });


function spawn_new(){
	for (let h = 0; h <= document.documentElement.clientHeight; h += 18) {
		const p_date = document.createElement('p');
		p_date.innerText = new Date();
		body.appendChild(p_date);	
	}
}