$(document).ready(function() {

// Initial Load
if ($(window).width() >= 699) {
	$('#logo').fadeIn(400, function() {
	    $('.desc').fadeIn(500);
	    $('#social').fadeIn(500, function() {
	    	$('.content').fadeIn(600);
	    });
	});
} else {
	$('#logo').fadeIn(500, function() {
		$('.content').fadeIn(700);
	});
}

// Project Name on hover

	$('.red').mouseenter(function() {
		$(this).fadeTo('fast',0.95);
	});

	$('.red').mouseleave(function() {
		$(this).fadeTo('fast',0);
	});



});