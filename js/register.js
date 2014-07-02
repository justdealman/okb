$(document).ready(function() {
	$('div.register input.phone').mask('+7(999)999-99-99', {placeholder: '_'});
	$('div.register input.data').mask('99.99.9999', {placeholder: '_'});
	$('div.register div.series input').mask('9999', {placeholder: '_'});
	$('div.register div.number input').mask('999999', {placeholder: '_'});
	$('div.register div.index input').mask('999999', {placeholder: '_'});
	$('div.register p .tip').each(function() {
		$(this).hover(
			function() {
				$(this).append('<em>'+$(this).attr('data-tip')+'</em>');
				$(this).find('em').css({'margin-top': -($(this).find('em').height()/2+16)+'px'});
			},
			function() {
				$(this).find('em').remove();
			}
		);
	});
	$('div.register div.disabled').each(function() {
		$(this).find('h2').siblings().hide();
	});
	$('div.register select').selectbox();
	$('div.register input[type="checkbox"], div.modal input[type="checkbox"], div.register input[type="radio"]').uniform();
	$('div.register .custom').find('h3').siblings().hide();
	$('div.register .custom input[type="radio"]').bind('click', function() {
		if ( $(this).val() == 'no' ) {
			$(this).parents('div.custom').children('*').show();
			$(this).parents('div.custom').find('h3').css({'margin-bottom': '27px'});
		}
		else {
			$(this).parents('div.custom').find('h3').siblings().hide();
			$(this).parents('div.custom').find('h3').css({'margin-bottom': '2px'});
		}
	});
	$('.modal').each(function() {
		$(this).css({'margin-top': -$(this).outerHeight()/2+'px'});
	});
	var bh = 0;
	$('div.register button.submit').bind('click', function() {
		$('.fade').fadeIn(250);
		$('div.modal[data-target="'+$(this).attr('data-modal')+'"]').fadeIn(250);
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.fade').bind('click', function() {
		$('.fade, div.modal').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
			$('.fade, .modal').fadeOut(250);
			$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
			$('body').scrollTop(bh);
		}
	});
});