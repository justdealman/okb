$(document).ready(function() {
	$('div.recover input.phone').mask('+7(999)999-99-99', {placeholder: '_'});
	$('input[type="radio"]').uniform();
	$('div.recover > div').each(function() {
		$(this).children('*').hide().siblings('h3').show();
		var current = $(this);
		current.find('input[type="radio"]').bind('click', function() {
			if ( $(this).is(':checked') ) {
				current.children('*').show();
				current.siblings('div').children('*').hide().siblings('h3').show();
			}
		});
	});
});