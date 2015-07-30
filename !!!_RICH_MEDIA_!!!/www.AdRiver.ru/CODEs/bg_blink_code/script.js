// Skin banner on ajax code
// Last edited 10.03.2010 by Alexandr Zonov
// ****** Editable block ******
	
// URL = http://calendarium.ua/?utm_source=liganet&utm_medium=brendirovanie&utm_campaign=startcalend
// var ar_back		= 'http://bg.liga.net/www/images/d97ac4781da3a022878c51cae8c4a584.gif';  // n661
var ar_back       = 'bg.jpg';  // bg.jpg  OR https://web.adriver.ru/banners/0001516/0001516233/0/bg.jpg
var ar_back_color	= '#ffffff';

var ar_transparent	= '0.gif';
var ar_tr_width     = '100%';
var ar_tr_height    = '805px';
var ar_tr_left      = '0px';
var ar_tr_top       = '0px';
var ar_gif_pixel    = '';

var banner_id       = 'my_great_unique_id';   // Додали!
var banner_position = 'absolute';             // Додали! завжди треба "absolute"
var banner_src      = 'banner.jpg';           // Додали! banner.jpg OR https://web.adriver.ru/banners/0001516/0001516233/0/banner.jpg
var banner_left     = '0px';                // Додали!
var banner_top      = '115px';                // Додали!
var banner_zIndex   = '999999';               // Додали!
var banner_width		= '1000px';               // Додали!
var banner_height   = '695px';                // Додали!
var banner_border   = '0';                    // Додали!
var banner_align    = 'center';               // Додали!

//*********** Editable block end *********************


var a = adriver(ar_ph);

var banner_CODE = '<img id="'+banner_id+'" src="'+ a.checkHttp(banner_src)+ '" style="display:none;position:'+banner_position+';left:'+banner_left+';top:'+banner_top+';z-Index:'+banner_zIndex+';" border="'+banner_border+'" width="'+banner_width+'" height="'+banner_height+'" align="'+banner_align+'" />';

new adriver.Plugin.require("pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_gif_pixel);
		
		document.body.style.background = ar_back_color+' url(' + a.checkHttp(ar_back) + ') no-repeat center top';
		window.extended_script_loader = function(){document.getElementById(banner_id).style.display='block';};   // Додали!
		window.extended_script_unloader = function(){document.getElementById(banner_id).style.display='none';};  // Додали!
		var ar_a = document.createElement('a');
		adriver.extend(ar_a.style, {position: 'absolute',
			top: a.normalize(ar_tr_top),
			left: a.normalize(ar_tr_left),
			width: a.normalize(ar_tr_width),
			height: a.normalize(ar_tr_height)});
		ar_a.href = a.reply.cgihref;
		ar_a.target = a.reply.target;
		ar_a.innerHTML = '<img src="' + a.checkHttp(ar_transparent) + '" border="0" width="100%" height="100%" onmouseover="extended_script_loader();" onmouseout="extended_script_unloader();">';  // Додали це  onmouseover="extended_script_loader();" onmouseout="extended_script_unloader();" 
		document.body.insertBefore(ar_a, document.body.firstChild);
		document.body.innerHTML+=(banner_CODE);  // Додали!
		a.loadComplete();
	})
});
