// JavaScript Document
$(document).ready(function(){
	$("#box1").click(function(){
		$(".content").fadeToggle(1000);
		$("#content1").hide();
		$("#content2").hide();
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg")
		}else{
			$(this).addClass("ch_bg");
		}
		
	});
	$("#box2").click(function(){
		$(".content2").fadeToggle(1000);
		$("#content").hide();
		$("#content1").hide();
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg")
		}else{
			$(this).addClass("ch_bg");
		}
		
	});
	$("#box3").click(function(){
		$(".content3").fadeToggle(1000);
		$("#content").hide();
		$("#content2").hide();
		if($(this).hasClass("ch_bg")){
			$(this).removeClass("ch_bg")
		}else{
			$(this).addClass("ch_bg");
		}
		
	});
});