(function($) { 
	"use strict";

$('.nav li a').click(function () {
			 $('.navbar-collapse').removeClass('in');
		});
// for banner height js
var windowWidth = $(window).width();
var windowHeight =$(window).height();
$('.banner').css({'height':windowHeight });


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});


// for portfoli lightbox jquary
jQuery(function($) {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );
	
	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});


// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -63
        }, 1000);
        return false;
      }
    }
  });
});


// Testimonial slider
$(window).load(function(){
  $('.flexslider').flexslider({
	animation: "fade",
	animationLoop: true,
	slideshow: true,
	pauseOnAction: false,
	slideshowSpeed: 7000,
	controlNav: true,
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
});


// we worked slider
$(window).load(function(){
      $('.worklogo').flexslider({
        animation: "slide",
		slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        
      });
    });


}(jQuery));
