$(function(){

	
		var docao=$('body,html').scrollTop();

		if(docao>100){
			$('.navbar').addClass('cuonchuot');
		}
		else if(docao<100){
			$('.navbar').removeClass('cuonchuot');
		}

		$(window).scroll(function(){
			var docao=$('body,html').scrollTop();

		if(docao>100){
			$('.navbar').addClass('cuonchuot');
		}
		else if(docao<100){
			$('.navbar').removeClass('cuonchuot');
		}

		if(docao > $('.diadiem').offset().top){
			$('.nutlentren').addClass('hien');
		}
		else if(docao<$('.diadiem').offset().top){
			$('.nutlentren').removeClass('hien');
		}


		});
		if(docao > $('.diadiem').offset().top){
			$('.nutlentren').addClass('hien');
		}
		else if(docao<$('.diadiem').offset().top){
			$('.nutlentren').removeClass('hien');
		}

		$('.nutlentren').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$('body,html').animate({scrollTop:0},1500,"easeInOutExpo");
		});



	




		$('ul.navbar-right li:nth-child(2) a').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */

			$('body,html').animate({scrollTop:$('.service').offset().top},1500,"easeInOutExpo");
		});
		
		$('ul.navbar-right li:nth-child(3) a').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */

			$('body,html').animate({scrollTop:$('.diadiem').offset().top},1500,"easeInOutExpo");
		});

		$('ul.navbar-right li:nth-child(1) a').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */

			$('body,html').animate({scrollTop:0},1500,"easeInOutExpo");
		});

		$('ul.navbar-right li:nth-child(4) a').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */

			$('body,html').animate({scrollTop:$('.map').offset().top},1500,"easeInOutExpo");
		});

		$('ul.navbar-right li:nth-child(5) a').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */

			$('body,html').animate({scrollTop:$('.ourblog').offset().top},1500,"easeInOutExpo");
		});

		$('ul.navbar-right li:nth-child(6) a').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */

			$('body,html').animate({scrollTop:$('footer').offset().top},1500,"easeInOutExpo");
		});
		
	


	


//datepicker bootstrap

$("#datepicker-departure").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());

$("#datepicker-return").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());      

$("#datepicker-departure-hotel").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());

$("#datepicker-return-hotel").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());  

$("#datepicker-departure-fh").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());

$("#datepicker-return-fh").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());    


//do do rong man hinh
var dorong= $(window).width();
console.log(dorong);

if(dorong<975){
		$('.navbar-right').addClass('an');
		$('.navbar-toggle').addClass('hien');
		$('.top').addClass('biendoi');
		$('.navbar').addClass('biendoi');
		$('.navbar-brand').addClass('biendoi');
		$('.navbar-header').addClass('biendoi');
	}
	else if(dorong>975){
		$('.top').removeClass('biendoi');
		$('.navbar-right').removeClass('an');
		$('.navbar-toggle').removeClass('hien');
		$('.navbar').removeClass('biendoi');
		$('.navbar-brand').removeClass('biendoi');
		$('.navbar-header').removeClass('biendoi');
	}

$(window).resize(function(){
	var dorong=$(window).width();
	console.log(dorong);


	if(dorong<975){

		$('.navbar-right').addClass('an');
		$('.navbar-toggle').addClass('hien');
		$('.top').addClass('biendoi');
		$('.navbar').addClass('biendoi');
		$('.navbar-brand').addClass('biendoi');
		$('.navbar-header').addClass('biendoi');

	}
	else if(dorong>975){
		$('.top').removeClass('biendoi');
		$('.navbar-right').removeClass('an');
		$('.navbar-toggle').removeClass('hien');
		$('.navbar').removeClass('biendoi');
		$('.navbar-brand').removeClass('biendoi');
		$('.navbar-header').removeClass('biendoi');
	}


	
});








    




//  var docao=$('body,html').scrollTop();
// 	if(docao>200){
// 		$('.navbar').addClass('biendoi');
// 	}
// 	else if(docao<200){
// 		$('.navbar').removeClass('biendoi');
// 	}
// $(window).scroll(function(){

// 	var docao=$('body,html').scrollTop();
// 	if(docao>200){
// 		$('.navbar').addClass('biendoi');
// 	}
// 	else if(docao<200){
// 		$('.navbar').removeClass('biendoi');
// 	}

// })

// $('.n1').click(function(){
// 	$('body,html').animate({scrollTop:$('.services').offset().top},1500,"easeInOutExpo");
// 	return false;
// })
// $('.n2').click(function(){
// 	$('body,html').animate({scrollTop:$('.portfolio').offset().top},1500,"easeInOutExpo");
// 	return false;
// })
// $('.n3').click(function(){
// 	$('body,html').animate({scrollTop:$('.about').offset().top},1500,"easeInOutExpo");
// 	return false;
// })
// $('.n4').click(function(){
// 	$('body,html').animate({scrollTop:$('.ourteam').offset().top},1500,"easeInOutExpo");
// 	return false;
// })
// $('.n5').click(function(){
// 	$('body,html').animate({scrollTop:$('.contact').offset().top},1500,"easeInOutExpo");
// 	return false;
// })
// $('.navbar-brand').click(function(){
// 	$('body,html').animate({scrollTop:0},1500,"easeInOutExpo");
// 	return false;
// })




	
// 	var docao= $(window).height();
// 	$('.top1').css({'height':docao});
// 	$(window).resize(function(){
// 		var docao= $(window).height();
// 	$('.top1').css({'height':docao});



	
// 	});



// 	// khi click vào nút menu

// 	$('.nutmenu').click(function(){
// 		$('.menu-phai').addClass('ra');

// 		$('.ra').css({'height':docao});
// 		$(window).resize(function(){
// 			var docao= $(window).height();
// 			$('.ra').css({'height':docao});
// 		})


// 		return false;
// 	})

// 	$('.nuttat').click(function(){
// 		$('.menu-phai').removeClass('ra');
		
// 		return false;
// 	})

	// console.log($('.bando').offset().top);// tinh do cao cua tu top den 1 div bat ki

// $('.nuttop').click(function(){
// 	$('body,html').animate({scrollTop:$('.top2').offset().top});
// 	$('.menu-phai').removeClass('ra');
// 	return false;
// })

// $('.n2').click(function(){
// 	$('body,html').animate({scrollTop:$('.top3').offset().top});
// 	$('.menu-phai').removeClass('ra');
// 	return false;
// })

// $('.n1').click(function(){
// 	$('body,html').animate({scrollTop:0});
// 	$('.menu-phai').removeClass('ra');
// 	return false;
// })
// $('.n3').click(function(){
// 	$('body,html').animate({scrollTop:$('.top5').offset().top});
// 	$('.menu-phai').removeClass('ra');
// 	return false;
// })

// $('.n4').click(function(){
// 	$('body,html').animate({scrollTop:$('.top6').offset().top});
// 	$('.menu-phai').removeClass('ra');
// 	return false;
// })
});