$(function(){
$("html").niceScroll();
smoothScrool(1000);
var imgH = $(window).height();
	    $(".bird-box").css("height",imgH);

	$(window).resize(function(){
	    var imgH = $(window).height();
	    $(".bird-box").css("height",imgH);
	});

});

	var headerHeight = $('.bird-box').height();
	
	

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	if(wScroll > headerHeight+$(window).height()*0.5){
		$('.to-top-shortcut').addClass('is-trig');
	}
	if(wScroll < headerHeight){
		$('.to-top-shortcut').removeClass('is-trig');
	}

	if(wScroll < headerHeight){
		$('.logo').css({
		'transform' : 'translate(0px,'+wScroll/2+'%)'
		});

		$('.back-bird').css({
			'transform' : 'translate(0px,'+wScroll/4+'%)'
		});

		$('.fore-bird').css({
			'transform' : 'translate(0px,-'+wScroll/80+'%)'
		});
	}

	if(wScroll >= headerHeight){
		$('nav.menu-top').css({
			'top': 0
		});
	}else{
		$('nav.menu-top').css({
			'top': -50
		});
	}

	if(wScroll>$('.clothes-pics').offset().top-($(window).height()/1.2)){

		$('.clothes-pics figure').each(function(i){
			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			},150*(i+1));
		});
	}


	if(wScroll > $('.large-window').offset().top - $(window).height()){
		
		$('.large-window').css({'background-position' : 'center '+( wScroll -$('.large-window').offset().top) +'px'});
		
		var opacity = (wScroll -$('.large-window').offset().top+400) / (wScroll / 5);
		
		$('.window-tint').css({
			'opacity' : opacity
		});

	}

	if(wScroll > $('.blog-posts').offset().top - $(window).height()){
		var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();
		
			$('.post-1').css({
			'transform':'translate('+offset+'px,'+Math.abs(offset*0.2)+'px)'
			});
			$('.post-3').css({
				'transform':'translate('+Math.abs(offset)+'px,'+Math.abs(offset*0.2)+'px)'
			});

	}
});

function smoothScrool (duration){
	$('a[href^="#"]').on('click',function(event){

		var target = $($(this).attr('href'));

		if(target.length){
			event.preventDefault();
			$('html,body').animate({
				scrollTop: target.offset().top
			},duration);
		}

	});
}