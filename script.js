//your JS code here. If required.
var audio;

function playSound(filename) {
	stopSound();
	audio = new Audio("sounds/" + filename);
	audio.play();
}

function stopSound() {
	if (audio) {
		audio.pause();
		audio.currentTime = 0;
	}
}
