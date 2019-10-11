$(document).ready(function(){
	$(".ult").css({"position":"absolute","right":"160px","margin-top":"-400px"})

	$(".ult").click(function(){
		$("#Ultimo").css({"background-color":"blue"})
	})
	$(".cruz").css({"position":"absolute","right":"160px","margin-top":"-430px"})
	
	$(".cruz").click(function(){
        $("div[value]").css({"background-color":"red"})
	})
	$(".limpiar").click(function(){
        $(".Cuadro").css({"background-color":"white"})
	})
});
//$("p").css({"background-color":"yellow","font-size":"200%"});