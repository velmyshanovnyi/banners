// Skin banner on ajax code
// Last edited 10.03.2010 by Alexandr Zonov
// ****** Editable block ******
	
// URL = http://calendarium.ua/?utm_source=liganet&utm_medium=brendirovanie&utm_campaign=startcalend
// var ar_back		= 'http://bg.liga.net/www/images/51b30dbfabc2ba3566398fee630ed753.png';  // ліга-3дома_ANTON
// var ar_back		= 'http://bg.liga.net/www/images/e67a94ab3a3f08e521488614d7efba61.gif';  // ліга-3дома n336
// var ar_back		= 'http://bg.liga.net/www/images/242222806865c2f8703442be122c7966.png';  // ліга-3дома n450
// var ar_back		= 'http://bg.liga.net/www/images/d97ac4781da3a022878c51cae8c4a584.gif';  // n661
var ar_back		= 'test.gif';  // n661 TEST


var ar_back_color	= '#ffffff';

var ar_transparent	= '0.gif';
var ar_tr_width		= '100%';
var ar_tr_height	= '907px';
var ar_tr_left		= '0px';
var ar_tr_top		= '0px';

var ar_gif_pixel	= '0.gif';

//*********** Editable block end *********************
var a = adriver(ar_ph);
	
new adriver.Plugin.require("pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_gif_pixel);
		
		document.body.style.background = ar_back_color+' url(' + a.checkHttp(ar_back) + ') no-repeat center top';
		
		var ar_a = document.createElement('a');
		adriver.extend(ar_a.style, {position: 'absolute',
			top: a.normalize(ar_tr_top),
			left: a.normalize(ar_tr_left),
			width: a.normalize(ar_tr_width),
			height: a.normalize(ar_tr_height)});
		ar_a.href = a.reply.cgihref;
		ar_a.target = a.reply.target;
		ar_a.innerHTML = '<img src="' + a.checkHttp(ar_transparent) + '" border="0" width="100%" height="100%">';
		ar_a.mouseover=function(){alert("OVER ME!");}
		document.body.insertBefore(ar_a, document.body.firstChild);
		
		a.loadComplete();
	})
});