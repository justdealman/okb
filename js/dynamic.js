$(document).ready(function() {
	var headertop = $('.header').offset().top;
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > headertop ) {
			$('.header').css({
				'position': 'fixed',
				'height': '68px'
			});
			$('.header > div > ul li a').css({
				'padding': '20px 43px 20px'
			});
			$('.header > div > ul li ul').css({
				'top': '68px'
			});
			$('.panel').css({
				'margin-bottom': '134px'
			});
		}
		else {
			$('.header').css({
				'position': 'relative',
				'height': '88px'
			});
			$('.header > div > ul li a').css({
				'padding': '30px 43px 30px'
			});
			$('.header > div > ul li ul ').css({
				'top': '88px'
			});
			$('.panel').css({
				'margin-bottom': '0'
			});
		}
	});
	$('.header > div > ul li').hover(
		function() {
			$(this).addClass('active');
			$(this).children('ul').stop(true,true).slideDown(150);
		},
		function() {
			$(this).removeClass('active');
			$(this).children('ul').stop(true,true).slideUp(150);
		}
	);
});