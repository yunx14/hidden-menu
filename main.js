$(document).ready(function(){
	$('#menutoggle').click(function(){
		var pos = ($('#wrappertop').css('left'));
		if (pos == '0px') {
			$('#wrappertop').animate({
				left: "200px"
			}, 400, function() {
				$('#wrappertop').bind('click', function() {
					$(this).animate({
						left: '0px'
					}, 400, function() {
						$('#wrappertop').unbind();
						console.log('unbinded');
					});
				})
			});
		} else {
			$('#wrappertop').animate({
				left: '0px'
			}, 400);
		}
	})
})