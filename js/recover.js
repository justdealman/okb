$(document).ready(function() {
	$('div.recover input.phone').mask('+7(999)999-99-99', {placeholder: '_'});
	$('input[type="radio"]').uniform();
	$('div.recover > div').each(function() {
		$(this).children('div').hide();
		var current = $(this);
		current.find('input[type="radio"]').bind('click', function() {
			if ( $(this).is(':checked') ) {
				current.children('div').show();
				current.siblings('div').children('div').hide();
			}
		});
	});
});