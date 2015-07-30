// Skin banner on ajax code
// Last edited 10.03.2010 by Alexandr Zonov
// -------------------------------------------
// PACH: ANT velmyshanovnyi@gmail.com 20121215
// розроблялось для www.liga.net
// ****** Editable block ******
	
var ar_back       = 'bg.jpg';  // bg.jpg  OR http://web.adriver.ru/banners/0001516/0001516233/0/bg.jpg
var ar_back_color	= '#ffffff';

var ar_transparent	= '0.gif';
var ar_tr_width     = '100%';
var ar_tr_height    = '805px';
var ar_tr_left      = '0px';
var ar_tr_top       = '0px';
var ar_zeropixel	= '';
var ar_gif_pixel	= ar_zeropixel;

var blinc_id            = 'blinc_id';           // Додали! Унікальний id для відпрацьовки
var blinc_ban_position  = 'absolute';           // Додали! завжди треба "absolute"
var blinc_ban_src       = 'banner1.jpg';        // Додали! banner1.jpg OR http://web.adriver.ru/banners/0001516/0001516233/0/banner1.jpg
var blinc_div_top       = 105;                  // Додали! значення в пікселях "px" відступ зверху
var blinc_div_zIndex    = 999999;               // Додали! значення zIndex для позиціонування в цифрі 
var blinc_ban_width     = 1000;                 // Додали! значення в пікселях "px" ширина центральної картинки. Оптимально "1000"
var blinc_ban_height    = 700;                  // Додали! значення в пікселях "px" висота центральної картинки  Оптимально "700"
var blinc_ban_border    = 0;                    // Додали! значення в пікселях "px" центральної картинки. Ставити "0"!

//*********** Editable block end *********************

var a = adriver(ar_ph);
var blinc_CODE = '&lt;div id="'+blinc_id+'" style="display:none; position:absolute; width:'+blinc_ban_width+'px; left:50%; margin-left:'+((-1)*(Math.ceil(blinc_ban_width/2)+(blinc_ban_width%2)+1))+'px; top:'+blinc_div_top+'px; z-Index:'+blinc_div_zIndex+'; "&gt;&lt;img class="blinc_ban_style" style="width:'+(blinc_ban_width+(blinc_ban_width%2)+2)+'px; height:'+blinc_ban_height+'px;" src="'+a.checkHttp(blinc_ban_src)+'" border="'+blinc_ban_border+'"; /&gt;&lt;/div&gt;'; // Додали! Фенкція центрування з виправленням "бага" на ІЕ [[ +((-1)*(Math.ceil(blinc_ban_width/2)+(blinc_ban_width%2)+1)) ]] методом піксельного здвига і ресайза центральної картинки 

new adriver.Plugin.require("pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_gif_pixel);

// BACKGROUND 			
		document.body.style.background = ar_back_color+' url(' + a.checkHttp(ar_back) + ') no-repeat center top';
		window.extended_script_loader = function(){document.getElementById(blinc_id).style.display='block';};   // Додали!
		window.extended_script_unloader = function(){document.getElementById(blinc_id).style.display='none';};  // Додали!
		var ar_a = document.createElement('a');
		adriver.extend(ar_a.style, {
      position: 'absolute',
			top: a.normalize(ar_tr_top),
			left: a.normalize(ar_tr_left),
			width: a.normalize(ar_tr_width),
			height: a.normalize(ar_tr_height)});
		ar_a.href = a.reply.cgihref;
		ar_a.target = a.reply.target;
		ar_a.innerHTML = '&lt;img src="' + a.checkHttp(ar_transparent) + '" border="0" width="100%" height="100%" onmouseover="extended_script_loader();" onmouseout="extended_script_unloader();"&gt;';  // Додали це: [[ onmouseover="extended_script_loader();" onmouseout="extended_script_unloader();" ]]
		document.body.insertBefore(ar_a, document.body.firstChild);
// BACKGROUND END
		document.body.innerHTML+=(blinc_CODE);  // Додали!
		
		a.loadComplete();
	})
});
</pre></body></html>
















