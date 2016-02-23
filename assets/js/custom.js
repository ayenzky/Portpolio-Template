(function ($) {

	new gnMenu( document.getElementById( 'gn-menu' ) );


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.gn-menu li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 400, 'easeInOutExpo');
			event.preventDefault();
		});
		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 400, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};
	
	// //nivo lightbox
	// $('.gallery-item a').nivoLightbox({
	// 	effect: 'fadeScale',                             // The effect to use when showing the lightbox
	// 	theme: 'default',                           // The lightbox theme to use
	// 	keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
	// 	clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
	// 	onInit: function(){},                       // Callback when lightbox has loaded
	// 	beforeShowLightbox: function(){},           // Callback before the lightbox is shown
	// 	afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
	// 	beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
	// 	afterHideLightbox: function(){},            // Callback after the lightbox is hidden
	// 	onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
	// 	onNext: function(element){},                // Callback when the lightbox gallery goes to next item
	// 	errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	// });
	// Isotope filters
		//-----------------------------------------------
	if ($('.isotope-container').length>0) {
		$(window).load(function() {
			$('.isotope-container').fadeIn();
			var $container = $('.isotope-container').isotope({
				itemSelector: '.isotope-item',
				layoutMode: 'masonry',
				transitionDuration: '0.6s',
				filter: "*"
			});
			// filter items on button click
			$('.filters').on( 'click', 'ul.nav li a', function() {
				var filterValue = $(this).attr('data-filter');
				$(".filters").find("li.active").removeClass("active");
				$(this).parent().addClass("active");
				$container.isotope({ filter: filterValue });
				return false;
			});
		});
	};

	//Modal
	//-----------------------------------------------
	if($(".modal").length>0) {
		$(".modal").each(function() {
			$(".modal").prependTo( "body" );
		});
	}


	
})(jQuery);


