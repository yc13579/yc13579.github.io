$(function(){
	var index=0;
	var timer=null;
	//图片自动轮播
	$(".banner").mouseenter(function(){
		clearInterval(timer);
	})
	$(".banner").mouseleave(function(){
		timer=setInterval(function(){
			index++;
			if(index>1) index=0;
			$(".banner img").eq(index).addClass("activeimg").siblings().removeClass();
		},2000);
	})
	$(".banner").mouseleave();
	//main中图片轮播
	var index1=0;
	var timer1=null;
	//按钮切换图片
	$(".next").click(function(){
		index1++;
		if(index1>4) index1=0;
		$(".auto img").eq(index1).fadeIn().siblings().fadeOut();
	})
	$(".prev").click(function(){
		index1--;
		if(index1<0) index1=4;
		$(".auto img").eq(index1).fadeIn().siblings().fadeOut();
	})
	//划过清除定时器
	$(".autoplay").mouseenter(function(){
		clearInterval(timer1);
	})
	//离开开始计时器
	$(".autoplay").mouseleave(function(){
		timer1=setInterval(function(){
			index1++;
		if(index1>4) index1=0;
		$(".auto img").eq(index1).fadeIn().siblings().fadeOut();
		},3000)
	})
	$(".autoplay").mouseleave();
	$('.back-top').click(function () {
				$('html,body').animate({ scrollTop:0});
	});
	$(window).scroll(function () {
				var scrollHeight = $(document).height();
				var scrollTop = $(window).scrollTop();
				scrollTop > 50 ? $(".back-top").slideDown(300).css("display","block") : $(".back-top").slideUp(300);			
			});
})