$(document).ready(function() {

// Initial Load
	$('#logo').fadeIn(500, function() {
	    $('.desc').fadeIn(600, function() {
	    	$('.content').fadeIn(900);
	    	$('.projectpage').fadeIn(900);
	    });
	});

// Mobile
	$('.mobileexit').click(function () {
		$('.description_container').fadeTo('fast',0, function() {
			if ($(window).width() > 699) {
				($('.description_container').css('display','inline-block');
				};
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