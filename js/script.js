jQuery(document).ready(function($) {
	
	$(".basket").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".basket__content").addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".basket__content").removeClass('active');
	});


	var scrollPos = 0;
	$(window).scroll(function(){
		if($(window).width() < 768){
			var st = $(this).scrollTop();
			if (st > scrollPos){
				$(".header__search").slideUp("slow");
			} else {
				$(".header__search").slideDown("slow");
			}
			scrollPos = st;
		}
	});

	$( ".menu__burger").on( "click", function() {
		$('.burger__midline').toggleClass('active');
		$('.menu__list').toggleClass('active');
		$("body").toggleClass('locked');
		
	});
	$pFocus = null;
	$val = "";
	$("input, textarea").focus(function(event) {
		$pFocus = $(this);
		$val = $(this).attr("placeholder");
		$(this).attr("placeholder"," ");
	});
	$("input, textarea").focusout(function(event) {
		$(this).attr("placeholder",$val);
	});
	

	$(".menu__item").hover(function() {
		$(this).children('.menu__subcategory').addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('.menu__subcategory').removeClass('active');
	});


	$('#preview .slider').slick({
		adaptiveHeight: true,
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500,
	});
	
	$('#top-sales .slider').slick({
		slidesToShow: 4,
		adaptiveHeight: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 800,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive:[
			{
				breakpoint: 991.999,
				settings:{
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings:{
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings:{
					slidesToShow: 1
				}
			}
		]
	});

});