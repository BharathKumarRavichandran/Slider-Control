var block = document.getElementById("block");
var widthSlider = document.getElementById("widthSlider");
var heightSlider = document.getElementById("heightSlider");
var rSlider = document.getElementById("rSlider");
var gSlider = document.getElementById("gSlider");
var bSlider = document.getElementById("bSlider");
var radiusSlider = document.getElementById("radiusSlider");
var shadowTop = document.getElementById("shadowHor");
var shadowRight = document.getElementById("shadowVer");
var shadowBottom = document.getElementById("shadowBlur");
var shadowLeft = document.getElementById("shadowSpread");
var opacitySlider = document.getElementById("opacitySlider");

function blockChange(){

	block.style.width = widthSlider.value+"px";
	block.style.height = heightSlider.value+"px";
	block.style.backgroundColor = "rgb("+rSlider.value+","+gSlider.value+","+bSlider.value+","+opacitySlider.value+")";
	block.style.borderRadius = radiusSlider.value+"px";
	block.style.boxShadow = shadowTop.value+"px "+shadowRight.value+"px "+shadowBottom.value+"px "+shadowLeft.value+"px ";

}

blockChange();