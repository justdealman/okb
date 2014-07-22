$(document).ready(function() {
	var headertop = 134;
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > headertop ) {
			$('.panel').addClass('fixed');
			$('.wrapper').css({'padding-top': '180px'});
		}
		else {
			$('.panel').removeClass('fixed');
			$('.wrapper').css({'padding-top': '0'});
		}
	});
	$('.panel .nav > li:has(ul)').hover(
		function() {
			$(this).addClass('active');
			$(this).children('ul').stop(true,true).slideDown(0);
		},
		function() {
			$(this).removeClass('active');
			$(this).children('ul').stop(true,true).slideUp(0);
		}
	);
});