 document.addEventListener("DOMContentLoaded",function(){


var nut_menu=document.querySelector('.toggle-icon');
var button_close=document.querySelector('.nuttat');
var menu_doc=document.querySelector('.navbar-right');



button_close.onclick=function(){
		menu_doc.classList.remove('hieuung');

}


nut_menu.onclick=function(){


	menu_doc.classList.add('hieuung');

}




},false);

 $(function(){
 	var chieucao=$('.header').height();



var chieurong=$(window).width();
if(chieurong<1136){

	var chieucao=(chieurong/2)+60;



	$('.header').css('height', chieucao);
	$('.header').css('minHeight','290px');
	}else{
		$('.header').css('height', '956px');


	}

console.log(chieurong);
$(window).resize(function(event) {
	var chieurong=$(window).width();

	if(chieurong<1136){


	var chieucao=(chieurong/2)+60;




	var chieucao=(chieurong/2)+60;



	$('.header').css('height', chieucao);
	$('.header').css('minHeight','290px');
	}else{
		$('.header').css('height', '956px');


	}



	
});



var khoangcach=$('body,html').scrollTop();

if(khoangcach>100){
	$('.navbar-default').addClass('navbar-fixed-top');


}
else if(khoangcach<100){
	$('.navbar-default').removeClass('navbar-fixed-top');

}
$(window).scroll(function(event) {

	var khoangcach=$('body,html').scrollTop();
if(khoangcach>100){
	$('.navbar-default').addClass('navbar-fixed-top');

}
else if(khoangcach<100){
	$('.navbar-default').removeClass('navbar-fixed-top');

}
});

})

