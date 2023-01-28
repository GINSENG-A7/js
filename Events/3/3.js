const playField = {
	x: undefined,
	y: undefined,
	right: undefined,
	bottom: undefined,
	setCoordinates: function() {
		let coordinatesOfFrame = fld.getBoundingClientRect();
		this.x = coordinatesOfFrame.x;
		this.y = coordinatesOfFrame.y;
		this.right = coordinatesOfFrame.right;
		this.bottom = coordinatesOfFrame.bottom;
		
	}
}

let playBall = {
	diameter: undefined,
	x: undefined,
	y: undefined,
	setCoordinates: function() {
		let coordinatesOfFrame = bll.getBoundingClientRect();
		this.diameter = coordinatesOfFrame.width;
	}
}

fld.addEventListener('click', playField.setCoordinates());
fld.addEventListener('click', playBall.setCoordinates());


let clickPagePosition = {
	x: undefined,
	y: undefined,
	setCoordinates: function(event) {
		this.x = event.pageX;
		this.y = event.pageY;
	}
}


alert(playBall.diameter / 2);
let leftLimit = playField.x + playBall.diameter / 2;
alert(leftLimit);
let topLimit = playField.y + playBall.diameter / 2;
let rightLimit = playField.right - playBall.diameter / 2;
let bottomLimit = playField.bottom - playBall.diameter / 2;

fld.addEventListener('click', {
	handleEvent(event) {
		// bll.style.left = event.pageX;
		clickPagePosition.setCoordinates(event);
		if( (clickPagePosition.x > leftLimit && clickPagePosition.x < rightLimit) &&
		 (clickPagePosition.y > topLimit && clickPagePosition.y < bottomLimit) ) {
			bll.style.left = clickPagePosition.x - playBall.diameter / 2 + "px";
			bll.style.top = clickPagePosition.y - playBall.diameter / 2 + "px";
		}
	}
});