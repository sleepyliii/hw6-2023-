var video = document.querySelector('.video');
var autoPlay=false;
var loop=false;
var volume_input = document.querySelector('#volume')
var volume_slider = document.querySelector('#slider')
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = autoPlay;
    video.loop = loop;
	console.log("Autoplay set to: ", autoPlay);
    console.log("Loop set to: ", loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});
function updateVolumeInfo(){
	console.log("Current Volume: " + volume_slider.value);
	volume_input.innerHTML=volume_slider.value+"%"
}
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	if (video.playbackRate>0){
		video.playbackRate *= 0.9;
	}
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	if (video.playbackRate>0){
		video.playbackRate /= 0.9;
	}
	console.log("Speed is", video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is", video.currentTime);
})
document.querySelector("#mute").addEventListener("click", function(){
	var Muted=video.muted
	var muteBottom=document.querySelector("#mute")
	if (Muted){
		muteBottom.textContent="Mute"
		console.log("Unmute");
		video.muted=false;
	}
	else{
		muteBottom.textContent="Unmute"
		console.log("Mute")
		video.muted=true
	}
})
document.querySelector("#slider").addEventListener("click", function(){
	console.log("Change Volume");
	volume_input.innerHTML=volume.value+"%"
	video.volume=volume.value/100
	console.log("The current value is", volume.value);

})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Styled");
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
})

