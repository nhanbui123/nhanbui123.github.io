
function taoovuong() {

	var khoixanh = document.getElementById('khoixanh');

	khoixanh.innerHTML = "";


	for (var i = 0; i < 10; i++) {


		khoixanh.innerHTML += '<li class="ovuong" id="ovuong' + i + '"></li>'

	}


}

function taodulieu() {
	var congviec = ['Front-End Dev', 'Wordpress', 'Freelance'];
	var counter = 0;
	setInterval(function () {
		//get the content    
		$('.congviec').html(congviec[counter]);
		counter++;
		if (counter === congviec.length) {
			counter = 0;
		}

	}, 2000);
}
var xulyhanhdong = function () {
	console.log('da xxong');
}


$(function () {

	var load = new TimelineMax();

	load

		// bat dau loadding
		.from($('.khoiload'), 0.4, { scale: 1, opacity: 0 })
		.to($('.khoiload'), 0.3, { scale: 5, opacity: 0.3, ease: Power4.easeOut })
		.to($('.loadding'), 0.7, { x: -2500, ease: Power1.easeOut })

	// initMap();
	taodulieu();
	taoovuong();



	$('ul.list-menu li').click(function (event) {

		$('ul.list-menu li.active').removeClass('active')
		$(this).addClass('active');



		var tenli = $(this).data('menu');


		$('.noidung').each(function (index, el) {
			if ($(this).hasClass(tenli)) {

				$(this).addClass('active');
			}
			else {
				$(this).removeClass('active');

			}
		});

		return false;
	});


	$('ul.list-menu li:nth-child(1)').click(function (event) {
		$('body,html').animate({ scrollTop: ($('.about').offset().top) - 100 }, 1000, "easeInOutExpo")
	});
	$('ul.list-menu li:nth-child(2)').click(function (event) {
		$('body,html').animate({ scrollTop: ($('.resume').offset().top) - 100 }, 1000, "easeInOutExpo")
	});
	$('ul.list-menu li:nth-child(3)').click(function (event) {
		$('body,html').animate({ scrollTop: ($('.work').offset().top) - 100 }, 1000, "easeInOutExpo")
	});
	$('ul.list-menu li:nth-child(4)').click(function (event) {
		$('body,html').animate({ scrollTop: ($('.contacts').offset().top) - 100 }, 1000, "easeInOutExpo")
	});



	var cuonweb = $('body,html').scrollTop();


	$(window).scroll(function (event) {
		var cuonweb = $('body,html').scrollTop();

		console.log(cuonweb);
		if (cuonweb > 300) {
			$('ul.list-menu').addClass('biendoi');
		}
		else if (cuonweb < 300) {
			$('ul.list-menu').removeClass('biendoi');
		}
	});


});



// function inconviec(){
// 	var congviec=['Front End','Seo Facebook','Freelance'];

// 		setInterval($('.congviec').html(congviec[i]),3000)
// 	}
// }













// 	var chieurong =$(window).width();

// 	$(window).resize(function(event) {
// 			var chieurong =$(window).width();
// 			console.log(chieurong);
// 	});

// var docaoredbackground = $(window).height();
// $('.background-red').css('height', docaoredbackground - 220);

// $(window).resize(function(event) {
// 	var docaoredbackground = $(window).height();
// $('.background-red').css('height', docaoredbackground - 220);
// });


// var url = window.location;
// console.log(url);
// $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
// $('ul.nav a').filter(function() {
//     return this.href == url;
// }).parent().addClass('active');

// var cuonweb=$('body,html').scrollTop();
// if(cuonweb>100){
// 	$('.navbar').addClass('biendoi');
// }
// else if(cuonweb<100){
// 	$('.navbar').removeClass('biendoi');
// }
// $(window).scroll(function(event) {
// 	var cuonweb=$('body,html').scrollTop();
// if(cuonweb>100){
// 	$('.navbar').addClass('biendoi');
// }
// else if(cuonweb<100){
// 	$('.navbar').removeClass('biendoi');
// }

// });


// $('i.btn-top').on('click', function(event) {
// 			event.preventDefault();
// 			/* Act on the event */
// 			$('body,html').animate({scrollTop:0},1500,"easeInOutExpo");
// 		});
// //hieu ung thay doi menu khi cuon chuot

// var khoangcach=$('body,html').scrollTop();

// if(khoangcach>80){
// 	$('.navbar').addClass('biendoi');
// 	$('.topbar').css('display', 'none');

// }
// else if(khoangcach<80){
// 	$('.navbar').removeClass('biendoi');
// 	$('.topbar').css('display', 'block');
// }
// $(window).scroll(function(event) {

// 	var khoangcach=$('body,html').scrollTop();
// if(khoangcach>80){
// 	$('.navbar').addClass('biendoi');
// 	$('.topbar').css('display', 'none');
// }
// else if(khoangcach<80){
// 	$('.navbar').removeClass('biendoi');
// 	$('.topbar').css('display', 'block');
// }
// });

// $("#datepicker-departure").datepicker({
// autoclose: true,
// todayHighlight: true
// }).datepicker('update', new Date());

// //chieu cao cua div child-appointment
// var chieucao1 =$('.child-appointment').offset().top;
// //vi tri re chuot
// var vitrirechuot = $('body,html').scrollTop();
// //ket qua cua chieucao1 tru di vitrirechuot
// var hieu = chieucao1 - vitrirechuot;

// if(hieu>10 && hieu<300 ){
// 	$('.child-appointment').addClass('tora1');
// }
// // div hien ung xay ra khi cuon chuot toi div
// $(window).scroll(function(event) {
// //chieu cao cua div child-appointment
// var chieucao1 =$('.child-appointment').offset().top;
// //vi tri re chuot
// var vitrirechuot = $('body,html').scrollTop();
// //ket qua cua chieucao1 tru di vitrirechuot
// var hieu = chieucao1 - vitrirechuot;


// if(hieu>10 && hieu<300 ){
// 	$('.child-appointment').addClass('tora1');
// }
// });


// var chieucao2 =$('.about').offset().top;
// //vi tri re chuot
// var vitrirechuot1 = $('body,html').scrollTop();
// //ket qua cua chieucao1 tru di vitrirechuot
// var hieu1 = chieucao2 - vitrirechuot1;

// if(hieu1>10 && hieu1<300 ){
// 	$('.child-about').addClass('tora1');
// }
// $(window).scroll(function(event) {

// //chieu cao cua div child-appointment
// var chieucao2 =$('.about').offset().top;
// //vi tri re chuot
// var vitrirechuot1 = $('body,html').scrollTop();
// //ket qua cua chieucao1 tru di vitrirechuot
// var hieu1 = chieucao2 - vitrirechuot1;


// if(hieu1>10 && hieu1<300 ){
// 	$('.child-about').addClass('tora1');
// }
// });

// var dorong=($(window).width());
// 	if(dorong<750){
// 		$('.sangphai').addClass('col-xs-push-1');
// 	}
// 	else if(dorong>750){
// 		$('.sangphai').removeClass('col-xs-push-1');
// 	}

// })

// $(window).resize(function(event) {
// 	//ham tinh do rong man hinh
// 	var dorong=($(window).width());
// 	if(dorong<750){

// 		$('.sangphai').addClass('col-xs-push-1');
// 	}
// 	else if(dorong>750){

// 		$('.sangphai').removeClass('col-xs-push-1');
// 	}



// })

// var dorong=($(window).width());
// 	if(dorong<850){
// 		$('.hieuung').addClass('thunho');
// 	}
// 	else if(dorong>850){
// 		$('.hieuung').removeClass('thunho');
// 	}

// $(window).resize(function(event) {
// 	//ham tinh do rong man hinh
// 	var dorong=($(window).width());
// 	if(dorong<850){
// 		$('.hieuung').addClass('thunho');

// 	}
// 	else if(dorong>850){
// 		$('.hieuung').removeClass('thunho');

// 	}
