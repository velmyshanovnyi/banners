// BackOver banner on ajax code
// Last edited 01.04.2010 by Alexandr Zonov

var ar_swf		= 'slwPromo.swf';
var ar_img		= 'slw.gif';
var ar_width		= '400';
var ar_height		= '60';
var ar_flashver		= '8';
var ar_wmode		= 'opaque';

var ar_back		= 'back.jpg';
var ar_back_color	= '#262625';

var ar_alt_link		= '';
var ar_zeropixel	= '';

//*********** Editable block end *********************
var a = adriver(ar_ph);
new adriver.Plugin.require("checkFlash.adriver", "makeFlash.adriver", "makeImage.adriver", "pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_zeropixel);

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

		a.loadComplete();
	})
});