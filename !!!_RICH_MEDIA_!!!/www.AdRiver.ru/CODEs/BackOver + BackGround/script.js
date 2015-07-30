// BackOver banner on ajax code
// Last edited 01.04.2010 by Alexandr Zonov

var ar_swf      = '728.swf';      // Флеш банер
var ar_img      = '728.gif';      // заглушка для флеш банера
var ar_width		= '728';          // ШИНИНА банера/заглушки
var ar_height		= '90';           // ВИСОТА банера/заглушки
var ar_flashver		= '8';          // Версія флеша
var ar_wmode		= 'opaque';

var ar_back		= 'http://bg.liga.net/www/images/f91e19433636cb54fbca128a3aa71c31.jpg'; // БЕКГРАУНД файл; n943
var ar_back_color	= '#ffffff'; // БЕКГРАУНД колір;

var ar_transparent	= '0.gif';
var ar_tr_width		= '100%';
var ar_tr_height	= '780px';
var ar_tr_left		= '0px';
var ar_tr_top		= '0px';

var ar_alt_link		= ''; 
var ar_zeropixel	= '';
var ar_gif_pixel	= ar_zeropixel;

//*********** Editable block end *********************
var a = adriver(ar_ph);
new adriver.Plugin.require("checkFlash.adriver", "makeFlash.adriver", "makeImage.adriver", "pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_zeropixel);
		
// BACKGROUND 		
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
		document.body.insertBefore(ar_a, document.body.firstChild);
// BACKGROUND END

// банер 728
		a.p.innerHTML = a.hasFlash(ar_flashver)&&ar_swf
			? a.makeFlash(ar_swf, {wmode:ar_wmode}, ar_width, ar_height)
			: ar_img
				? a.makeImage(ar_img, ar_alt_link, ar_width, ar_height)
				: '';

		if (a.p.innerHTML!=''){
			function setStyle(a,b,c,d){
				B.style.backgroundColor		= a;
				B.style.backgroundImage		= b;
				B.style.backgroundPosition	= c;
				B.style.backgroundRepeat	= d;
			}

			var D = document,
				B = D.body,
				old_c = a.getStyle(B, 'backgroundColor'),
				old_i = a.getStyle(B, 'backgroundImage'),
				old_p = a.getStyle(B, 'backgroundPosition'),
				old_r = a.getStyle(B, 'backgroundRepeat');

			ar_back = a.checkHttp(ar_back);
			D.preLoadImage = new Image();
			D.preLoadImage.src = ar_back;

			a.p.onmouseover = function(){setStyle(ar_back_color, 'url('+ar_back+')', 'center top', 'no-repeat')};
			a.p.onmouseout = function(){setStyle(old_c, old_i, old_p, old_r)};
		}
// банер 728 END

		a.loadComplete();
	})
});