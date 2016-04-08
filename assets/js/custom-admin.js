// Global variables for webriq tweaks

var logo 	= '/img/logo@xs.png';	// Path for your Logo
var nav  	= true;				// Enable or Disble "NEW" Post link 
var social 	= '.team-social'; 	// Add the target div to customize list

// WARNING: Avoid using Document Ready
// because most of the items are fetch
// via AJAX so your injection won't
// Work properly. All your hacks put
// Them inside this container instead.

$( document ).ajaxComplete(function() {

	setTimeout(function(){

		// Change the default logo
		$('.cms-logo').find('a').html('<img src=' + logo + '>');

		

	}, 100);  


	setTimeout(function(){
		myStopFunction()
	}, 1000)


	// For Interval Items
	var timer = setInterval(function(){
		lowercase(social);
	}, 100)

	// Admin -> Dashboard -> Right Nav
	// Remove the First Link if all pages
	// Are static. Toggle 'nav' above to enable

	if( nav == true){
		$('.cms-right-menu').find('.cms-has-dropdown:first-child').hide();
	}else if (nav == false) {
		$('.cms-right-menu').find('.cms-has-dropdown:first-child').show();
	}
	

});


// Dynamically change the attributes to lowercase
// Type in the element ID in order for it to work

function lowercase(el){
	$(el).find('li').each(function(){			
		var a = $(this).attr('class').toLowerCase();
		$(this).attr('class', a);
		console.log(a);
	});
}


function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(timer);
}