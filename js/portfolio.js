$(document).ready(function() {

// Initial Load
	$('#logo').fadeIn(400, function() {
	    $('.desc').fadeIn(600);
	    $('#social').fadeIn(600, function() {
	    	$('.content').fadeIn(800);
	    	$('.projectpage').fadeIn(800);
	    });
	});

// Mobile
	$('.mobileexit').click(function () {
		$('.description_container').fadeTo('fast',0, function() {
			$('.description_container').css('display','none')
			$('body').css('overflow-y','visible');
		});
	});

	$('.mobiletab').click(function () {
		$('.description_container').fadeTo('fast',1).css('display','block');
		$('.mobileexit').fadeTo('fast',1);
		$('body').css('overflow-y','hidden');	
	});

// Project Name on hover

	$('.red').mouseenter(function() {
		$(this).fadeTo('fast',0.95);
	});

	$('.red').mouseleave(function() {
		$(this).fadeTo('fast',0);
	});

	$('.red').click(function() {
		$(this).css('display','none');
	});
});