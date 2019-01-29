// $(function(){

// // ham hien thi lan luot tung phan tu
// TweenMax.staggerFrom($('.khung'),1,{top:100,opacity:0},0.4);
// TweenMax.staggerFrom($('.khung2'),1,{top:100,opacity:0},0.4);
// TweenMax.staggerFrom($('.khung3'),1,{top:100,opacity:0},0.4);
// //ham toogle noi dung trong phan tu thu nho lai
// 	$('.ndmotkhoi').slideUp('slow/400/fast');
// //click vao thi noi dung xo xuong
// 	$('.motkhoi h3').click(function(event) {
// 		$(this).next().slideToggle('slow/400/fast');
// //tu dong them hoac xoa class mau xanh
// 		$(this).toggleClass('mauxanh');
// 	});

// //ham click di chuyen den vi tri quy dinh

// $('ul.navbar li:nth-child(1)').on('click', function(event) {
	
// 	$('body,html').animate({scrollTop:($('.chapter1').offset().top)-100},2500,'easeInOutExpo');


// });
// $('ul.navbar li:nth-child(2)').on('click', function(event) {
	
	
// 	$('body,html').animate({scrollTop:($('.chapter2').offset().top)-100},2500,'easeInOutExpo');

// });
// $('ul.navbar li:nth-child(3)').on('click', function(event) {
	
// 	$('body,html').animate({scrollTop:($('.chapter3').offset().top)-100},2500,'easeInOutExpo');


// });
// $('ul.navbar li:nth-child(4)').on('click', function(event) {
	
	
// 	$('body,html').animate({scrollTop:($('.chapter4').offset().top)-100},2500,'easeInOutExpo');

// });

// //ham thay doi menu khi scroll chuot
// var docao=$('body,html').scrollTop();
// if(docao>100){
// 		$('.menu').addClass('biendang');
// 	}
// 	else if(docao<100){
// 		$('.menu').removeClass('biendang');
// 	}

// $(window).scroll(function(event) {
// var docao=$('body,html').scrollTop();
// 	if(docao>100){
// 		$('.menu').addClass('biendang');
// 	}
// 	else if(docao<100){
// 		$('.menu').removeClass('biendang');
// 	}

// });
// //ham thay doi 1 div bat ki khi cuon chuot toi div do

// var docao=$('body,html').scrollTop();

// if(docao<($('.chapter1').offset().top)+50){
// $('.chapter1').addClass('biendoi');
// }
// $(window).scroll(function(event) {
// var docao=$('body,html').scrollTop();
// 	if(docao<($('.chapter1').offset().top)+50){
// 	$('.chapter1').addClass('biendoi');
// }
// });

// if(docao<($('.chapter2').offset().top)+50){
// $('.chapter2').addClass('biendoi');
// }
// $(window).scroll(function(event) {
// var docao=$('body,html').scrollTop();
// 	if(docao<($('.chapter2').offset().top)+50){
// 	$('.chapter2').addClass('biendoi');
// }
// });


// //ham phong to anh khi click vao bang fancy box

// $('[data-fancybox="gallery"]').fancybox({
//   afterLoad : function(instance, current) {
//     var pixelRatio = window.devicePixelRatio || 1;

//     if ( pixelRatio > 1.5 ) {
//       current.width  = current.width  / pixelRatio;
//       current.height = current.height / pixelRatio;
//     }
//   }
// });




// });
  


