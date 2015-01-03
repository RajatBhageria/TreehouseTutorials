//Hide the Message
$(".spoiler span").hide();
//Create a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")

//When button pressed
$(".spoiler button").click(function() {
	//Show the Message
	$(this).prev().show();
	//Hide the button
	$(this).remove();

})
	