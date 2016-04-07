// Global variables for webriq tweaks

var logo = '/img/logo@xs.png';


// WARNING: Avoid using Document Ready
// because most of the items are fetch
// via AJAX so your injection won't
// Work properly. All your hacks put
// Them inside this container instead.

$( document ).ajaxComplete(function() {

	setTimeout(function(){
		$('.cms-logo').find('a').html('<img src=' + logo + '>');
	}, 100);   

});