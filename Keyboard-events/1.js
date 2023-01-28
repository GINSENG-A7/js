const func = () => {alert("12523456435735")};
document.addEventListener("keydown", (event) => {
	runOnKeys(func, "KeyZ", "KeyX", "KeyC");
});

function runOnKeys(func, ... code_n) {
	let flag = true;
    for (let i = 0; i < arguments.lenght; i++) {
		let keycode = arguments[i].code;
        if (keycode == event.keyCode) {

		}
		else {
			flag = false;
			break;
		}
    }
	if (flag == true) {
		func();
	}
}