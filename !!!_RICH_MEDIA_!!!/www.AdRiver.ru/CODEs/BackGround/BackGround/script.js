// Skin banner on ajax code
// Last edited 10.03.2010 by Alexandr Zonov
// ****** Editable block ******
	
var ar_back		= 'back.gif';
var ar_back_color	= '#262625';  // колір заливки
var ar_back_param	= 'no-repeat center top'; // http://htmlbook.ru/css/background

var ar_transparent	= '1x1.gif';
var ar_tr_width		= '100%';
var ar_tr_height	= '135px';
var ar_tr_left		= '0px';
var ar_tr_top		= '0px';

var ar_gif_pixel	= '';

//*********** Editable block end *********************
var a = adriver(ar_ph);
	
new adriver.Plugin.require("pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_gif_pixel);
		
		document.body.style.background = ar_back_color+' url(' + a.checkHttp(ar_back) + ') '+ ar_back_param +' ';
		
		var ar_a = document.createElement('a');
		adriver.extend(ar_a.style, {position: 'absolute',
			top: a.normalize(ar_tr_top),
			left: a.normalize(ar_tr_left),
			width: a.normalize(ar_tr_width),
			height: a.normalize(ar_tr_height)});
		ar_a.href = a.reply.cgihref;
		ar_a.target = a.reply.target;
		ar_a.innerHTML = '<img src="' + a.checkHttp(ar_transparent) + '" border="0" width="100%" height="100%">';
		document.body.insertBefore(ar_a, document.body.firstChild);
		
		a.loadComplete();
	})
});