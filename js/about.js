// JavaScript Document
$(document).ready(function(){
	$("#box1").click(function(){
		$(".content").fadeToggle(1000);
		$(".content1").fadeOut(100);
		$(".content2").fadeOut(100);
        console.log($("#content2").css("display"))
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg")
		}else{
			$(this).addClass("ch_bg");
		}
		
	});
	$("#box2").click(function(){
		$(".content2").fadeToggle(1000);
		$(".content").fadeOut(100);
		$(".content1").fadeOut(100);
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg")
		}else{
			$(this).addClass("ch_bg");
		}
		
	});
	$("#box3").click(function(){
		$(".content3").fadeToggle(1000);
		$(".content").fadeOut(100);
		$(".content2").fadeOut(100);
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg")
		}else{
			$(this).addClass("ch_bg");
		}
		
	});
});
