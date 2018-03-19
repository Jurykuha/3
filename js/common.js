$(function(){


      /*Nav Tab*/
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 150) {
	            $('.nav')
	            .addClass('nav-fixed animated fadeInUp')
	            
	        } else {
	            $('.nav')
	            .removeClass('nav-fixed animated fadeInUp')
	            .addClass('animated fadeInDown')
	        }
	    });

	    /* Media NAV*/

	    var menuBtn = $('.nav-burger');
	    var menu = $('.nav-menu');

	    menuBtn.on('click', function(event) {
	    	event.preventDefault();
	    	// menu.toggleClass('nav-menu_active');
	    	menu.slideToggle(400);
	    });

	   /*Slider*/
	   $('.header-slider').slick({
	   		arrows: true,
	   		dots: true
	   });


	   $('.expo-slider').slick({
	   		arrows: true,
	   		dots: false,
	   		prevArrow: '<img class="slick-prev" src="img/icons/prev1.png" alt="arrow" />',
	   		nextArrow: '<img class="slick-next" src="img/icons/list.svg" alt="arrow" />'
	   });

	   /*Scroll*/
	   $('.svg-arrow').click(function(){
	   	var scroll_el = $(this).attr('href');
	       $('html, body').animate({scrollTop:$(scroll_el).position().top}, 1500);
	   });

	   $('.top-href').click(function(event) {
	   	/* Act on the event */
	   		var scroll_el = $(this).attr('href');
	   	    $('html, body').animate({scrollTop:$(scroll_el).position().top}, 1500);
	   });




});