$(document).ready(function() {
	$('.support .type h6 a').bind('click', function() {	
		$(this).parent().find('input[type="file"]').click();
		return false;
	});
});