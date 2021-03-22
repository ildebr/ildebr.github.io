
/*
$('.pic-slider').infiniteslide({
	speed: 200,
	direction: 'right'
});*/



var x;

x=$(document);

x.ready(slider);

var pos = 1;
var mov = 10;
/*
function iniciar(){
	var p = $(".pic-slider");
	
	
	if(pos == 1){
		p.clone().appendTo(p);
	}
	pos+=mov;
	//x.clone().appendTo(x);
	p.animate({"left" : -pos}, iniciar);
}*/

function slider(){
	//var p = $(".pic-slider");
	var p = $(".hero4");
	pos+=mov;
	p.animate({"background-position-x" : -pos}, slider);
} 