// Global variables for webriq tweaks

var logo = '/img/logo@xs.png';	// Path for your Logo
var nav  = true;				// Enable or Disble "NEW" Post link 


// WARNING: Avoid using Document Ready
// because most of the items are fetch
// via AJAX so your injection won't
// Work properly. All your hacks put
// Them inside this container instead.

$( document ).ajaxComplete(function() {

	setTimeout(function(){
		$('.cms-logo').find('a').html('<img src=' + logo + '>');
	}, 100);  


	// Admin -> Dashboard -> Right Nav
	// Remove the First Link if all pages
	// Are static. Toggle 'nav' above to enable

	if( nav == true){
		$('.cms-right-menu').find('.cms-has-dropdown:first-child').hide();
	}else if (nav == false) {
		$('.cms-right-menu').find('.cms-has-dropdown:first-child').show();
	}

});