//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');

var $image = $("<img>");

var $caption = $("<p></p>")

$overlay.append($image).append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	$image.attr("src",imageLocation);

	var alt = $(this).children("img").attr("alt");
	$caption.text(alt);

	$overlay.show();


});


$overlay.click(function(){
	$(this).hide();
})