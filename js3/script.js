$(document).ready(function() {

	var controller = new ScrollMagic.Controller(); // this is needed for all scrollmagic effects: think of controller as the vehicle that will deliver all scrollmagic effects to the user

	var cat = document.getElementById("video"); // variable to select the video. this is needed fo the following two functions below

	function playVideo() { // function to play the video
		cat.play();
	}

	function pauseVideo() { // function to pause and rewind the video
		cat.pause();
		cat.currentTime = 0;
	}

	var animation = new TimelineMax() // TimelineMax is the Greensock animation used by Scrollmagic
				.to("#video", 1, {x: "-250%"}) // horizontal motion to bring image/video to enter from the right
				.to("#video", 1, {x: "-520%", delay: .25}); // horizontal motion that moves the image/video to exit left


	var scene = new ScrollMagic.Scene({ // ditto
					triggerElement: "#trigger_1", // designates #trigger div as the trigger for our scrollmagic effects
					triggerHook: "onLeave", // setting this to "onLeave" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
					duration: "200%" // duration of the scrollmagic effects
				})
				.setPin("#video") // fixes the video to the screen
				.setTween(animation) // plays the horizontal motion of the video
			  	.addTo(controller); // adds all effects mentioned above to the scrollmagic controller

	var play = new ScrollMagic.Scene({
					triggerElement: "#trigger_1",
					triggerHook: "onLeave",
					offset: 200, // delays everything by 400 pixels
					duration: "200%"
				})
				.on("enter", function () {
					playVideo();
				})
				.on("leave", function () {
					pauseVideo();
				})
				.addTo(controller);

});