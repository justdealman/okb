$(document).ready(function() {
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuint',
		autoHeight: true,
		autoHeightSpeed: 0,
		play: 0
	});
	$('.slider, .slider .container, .slider .container > div > div').width($(window).width());
	$('.slider .container > div > div').each(function() {
		$(this).find('img.cover').css({'margin-left': -$(this).find('img.cover').attr('width')/2+'px'});
	});
	$('.faq ul li div').each(function() {
		$(this).children('div').hide();
		$(this).find('h3').bind('click', function() {
			$(this).parent().children('div').slideToggle(0);
			$(this).parent().toggleClass('active');
			return false;
		});
	});
});