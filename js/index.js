// JavaScript Document
$(document).ready(function(){
	$(window).bind('load resize', function(){
		re_win();//獨立的函示
	});	
	
function re_win(){
	
	var imgp = $("img").eq(0);//找標籤中第一張圖
	var imgwidth = imgp.width();
	var imgheight = imgp.height();
	
	var winwidth = $(window).width();//視窗的寬度
	var winheight = $(window).height();//視窗的高度
	
	var winratio = winwidth/winheight;
	var imgratio = imgwidth/imgheight;
	
	$(".content").css({height: winheight});
	
	if (winratio>1 && winratio>imgratio){
		$(".content").find(".fullimg").css({
			width:"100%",
			height:"auto"
		});
	}else{
		$(".content").find(".fullimg").css({
			width:"auto",
			height: winheight
		});
	}
}
	
});