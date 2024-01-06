$(document).ready(function(){	
	$("#myController").jFlow({
		slides: "#mySlides",
		controller: ".jFlowControl", // must be class, use . sign
		slideWrapper : "#jFlowSlide", // must be id, use # sign
		selectedWrapper: "jFlowSelected", // just pure text, no sign
		easing: "easeInOutCubic",
		duration: 700,
		width: "940px",
		height: "308px",
		prev: ".jFlowPrev", // must be class, use . sign
		next: ".jFlowNext" // must be class, use . sign
	});
})






