var color = $(".selected").css("background-color");
var $newColor  = $("#newColor");

//When clicking the control list items
$(".controls").on("click", "li", function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");

	//Select clicked elements
	$(this).addClass("selected");

	//cache current color;
	color = $(this).css("background-color");
});


//When new color is pressed
$("#revealColorSelect").click(function(){
	//show color select or hide the color select
	changeColor();
	$("#colorSelect").toggle();
});

//Show new color in span
var changeColor = function(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$newColor.css("background-color", "rgb(" + r + "," + g + ", " + b+ ")");
};


//When color slider changes
$("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function(){

	//append color to the controls ul
	var $newLi = $("<li></li>");
	$newLi.css("background-color", $newColor.css("background-color"));
	//$newLi.addClass($newColor.css("background-color"));
	$(".controls ul").append($newLi);
	//Select the new color
	$newLi.click();
})

//on mouse events on the canvas
	//Draw lines
