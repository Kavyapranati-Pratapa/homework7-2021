var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	document.getElementById("volume").innerHTML = video.volume*100 + "%";
 });

 document.querySelector("#pause").addEventListener("click",function() {
	console.log("Pause Video");
	video.pause();
 });

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click",function() {
	console.log(this.value);
	video.volume = this.value/100;

	document.getElementById("volume").innerHTML = this.value + "%";
 });

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("GO FASTER");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add(".oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Back to Normal")
	video.classList.remove(".oldSchool");
});