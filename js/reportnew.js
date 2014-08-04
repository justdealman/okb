$(document).ready(function() {
	$('.drop').append('<span class="close"></span>');
	$('.main .mark h3 strong a').bind('click', function() {
		if ( $(this).parents('.mark').find('.drop:visible').length > 0 ) {
			$(this).parents('.mark').find('.drop').stop(true,true).fadeOut(250);
		}
		else {
			$(this).parents('.mark').find('.drop').stop(true,true).fadeIn(250);
		}
		return false;
	});
	$('.main .intro .rb .links p a').bind('click', function() {
		if ( $(this).parents('.links').find('.drop:visible').length > 0 ) {
			$(this).parents('.links').find('.drop').stop(true,true).fadeOut(250);
		}
		else {
			$(this).parents('.links').find('.drop').stop(true,true).fadeIn(250);
		}
		return false;
	});
	$('.drop .close').bind('click', function() {
		$(this).parent().stop(true,true).fadeOut(250);
		return false;
	});
	$('.tabs .information .tbody > div > .more .history table tbody td.minus, .tabs .information .tbody > div > .more .history table tbody td.plus, .tabs .information .tbody > div > .more .history table tbody td.neutral').hover(
		function() {
			$(this).append('<div><span>'+$(this).attr('data-bubble')+'</span></div>');
		},
		function() {
			$(this).find('div').remove();
		}
	);
	$('.main .intro .information .tbody > div > .more .history table tbody td.minus, .main .intro .information .tbody > div > .more .history table tbody td.plus, .main .intro .information .tbody > div > .more .history table tbody td.neutral').hover(
		function() {
			$(this).append('<div><span>'+$(this).attr('data-bubble')+'</span></div>');
		},
		function() {
			$(this).find('div').remove();
		}
	);
	$('.main .information .tbody > div .preview').bind('click', function() {
		$(this).parent().toggleClass('active');
		var maxdesc = 0;
		$(this).parent('div').find('.more .description > div > div').each(function() {
			var h = $(this).height(); 
			maxdesc = h > maxdesc ? h : maxdesc;
		});
		$(this).parent('div').find('.more .description > div > div').height(maxdesc);
		return false;
	});
	$('.main .information .tbody > div > .more .hide').bind('click', function() {
		$(this).parent().parent().removeClass('active');
		return false;
	});
	$('.main .information .additional h4 a').bind('click', function() {
		$(this).parents('.additional').toggleClass('active');
		return false;
	});
	var userdrop = $('.panel .user').innerWidth()-30;
	$('.panel .user > div').width(userdrop);
	$('.main .information .chief').each(function() {
		$(this).find('h2 a').bind('click', function() {
			$(this).parents('.chief').toggleClass('active');
			return false;
		}).click();
	});
});