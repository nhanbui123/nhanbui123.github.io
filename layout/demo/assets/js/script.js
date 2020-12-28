
$(document).ready(function() {


	$(".filter-button").click(function(){
		var value = $(this).attr('data-filter');

		if(value == "all")
		{
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
          }
          else
          {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
$(".filter").not('.'+value).hide('3000');
$('.filter').filter('.'+value).show('3000');

}
});

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");


// slick video


$('.__watch').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.__nav_watch'
});



$($(".__watch iframe").get().reverse()).each(function( index ) {

  let id_video = $(this).attr("src").split('/').pop();

  console.log(id_video);
  $('.__nav_watch').prepend('<div class="item_nav"><img src="https://img.youtube.com/vi/'+ id_video +'/mqdefault.jpg"></div>')

});

$('.__nav_watch').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.__watch',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  infinite: true,

});



jQuery("#owl-slide-home").owlCarousel({

 loop: true,

 autoplay: true,

 autoplayTimeout: 4000,

 autoplayHoverPause: true,

 nav: true,

 items: 1,

 slideTransition: 'ease',

 smartSpeed: 1000,

 navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

 responsive: {

  0: {
    dots: false
  },

  1000: {
    dots: true
  },

},


});


jQuery("#owl-service").owlCarousel({

  loop: true,

  autoplay: true,

  margin: 30,

  autoplayTimeout: 4000,

  autoplayHoverPause: true,

  nav: true,

  dots: false,

  responsive: {

    0: {

      items: 1,
      margin: 15,

    },

    600: {

      items: 2,
      margin: 30,

    },

    800: {

      items: 3,

    },

    1200: {

      items: 4,
      margin: 0,

    }

  },

  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

});


(function($) {
    $(function() { //on DOM ready
      $("#scroller").simplyScroll({
        customClass: 'vert',
        orientation: 'vertical',
        auto: true,
        manualMode: 'loop',
        frameRate: 10,
        speed: 0.5,
      });
    });
  })(jQuery);


  // add toggle icons footer
  // add toggle icons footer
// let width = $(this).width(); //this = window
// if(width < 768) {
//    $('.address').addClass('has_down_icon');
//    $('.post__').addClass('has_down_icon');
// }
// else {
//     $('.address').removeClass('has_down_icon');
//     $('.post__').removeClass('has_down_icon');
// }

//   $(window).on('resize', function(){

//      let width = $(this).width(); //this = window
//      if(width < 768) {
//        $('.address').addClass('has_down_icon');
//        $('.post__').addClass('has_down_icon');
//    }
//    else {
//     $('.address').removeClass('has_down_icon');
//     $('.post__').removeClass('has_down_icon');
// }

// });

// $('.has_down_icon').click(function() {
//  $($(this)'.__address').toggle();
// }); 

// $('.has_down_icon.post__').click(function() {
//     $('.post__').toggle();
// });    





});







//create scroll


