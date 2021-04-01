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
	video.playbackRate = playbackSpeed;
	document.getElementById("volume").innerHTML = (playbackSpeed * 100) - 5 + "%";
	console.log((playbackSpeed * 100) - 5 + "%");
});

document.querySelector("#vintage").addEventListener("click", function(){
	document.getElementById("v.video").classList.add(".oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	document.getElementById(".video").classList.remove(".oldSchool");
});