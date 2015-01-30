$(document).ready(function() {

// Initial Load
	$('#logo').fadeIn(500, function() {
	    $('.desc').fadeIn(600, function() {
	    	$('.content').fadeIn(900);
	    	$('.projectpage').fadeIn(900);
	    });
	});

// Mobile
	$('.mobiletab').click(function () {
		$('.description_container').fadeTo('fast',1).css('display','block');
		$('.mobileexit').fadeTo('fast',1);
		$('.mobiletab').fadeTo('fast',0);
		$('body').css('overflow-y','hidden');	
	});

		$('.mobileexit').click(function () {
		$('.description_container').css('display','none').fadeTo('fast',0, function() {
			$('body').css('overflow-y','visible');
			$('.mobileexit').fadeTo('fast',0);
			$('.mobiletab').fadeTo('fast',0);
		});
	});

	$(window).resize(function() {
		if ($(window).width() >= 699) {
			$('.description_container').css('display','inline-block').fadeTo('fast',1);
		} else {
			$('.description_container').css('display','none');
		}
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