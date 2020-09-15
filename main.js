$(document).ready(function() {
	
	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();


	$(".select").click(function(){
		if($(this).hasClass("active")){
			$(".select").removeClass("active");
			$(".select_color .img_container .red").hide();
			$(".select_color .img_container .blue").fadeIn('5000');
		} else {
			$(".select").addClass("active");
			$(".select_color .img_container .blue").hide();
			$(".select_color .img_container .red").fadeIn('5000');
		}
	})


	// faq_list 2
	$(".faq_list li").on('click', function(){
		if( !$(this).hasClass('active') ){
			$(".faq_list li.active .answer").slideUp();
			$(".faq_list li.active").removeClass("active");
			$(this).children(".answer").slideDown();
			$(this).addClass("active");
		} else{
			$(".faq_list li.active").removeClass("active");
			$(this).children(".answer").slideUp();
		}
	});

});





$(window).on("load", function(){

	$(".color_carousel").owlCarousel({
		loop: false,
		autoHeight: true,
		smartSpeed: 300,
		mouseDrag: true,
		pullDrag: true,
		dots: true,
		nav: true,
		navText: '',
		responsive:{
			0:{
				items:1,
				nav:true,
			},
			660:{
				items:2,
				nav:false,
				mouseDrag: false,
			}
		}
	});

	$(".reviews").owlCarousel({
		autoWidth: true,
		center: true,
		loop:true,
		nav: true,
		navText: '',
	});

});
