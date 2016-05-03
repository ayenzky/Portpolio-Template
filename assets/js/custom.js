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

	// Execute Filtering

	removeDuplicates();

})(jQuery);


// Removing Duplicated Entries
function removeDuplicates() {
	 
	var map = {};
    $(".filters.text-center ul.nav").find("li a").each(function () {
        var value = $(this);
        if (map[value.text()]) {
            map[value.text()].parent('li').remove();
        }
        map[value.text()] = value;
    });

    $('.filters.text-center ul.nav').prepend('<li><a href="#" data-filter="*">All</a></li>')

}
