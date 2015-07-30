var ar_gif		= '0.gif'; // заглушка
var ar_gif_href	= ''; // альтернативный клик по заглушке
var ar_pix		= ''; // зеропиксель
var ar_flash_ver = 8; // версия флэш
var ar_swf = "1000x90.swf"; // имя файла флэшки
var ar_width = 1000; // ширина баннера
var ar_height = 90; // высота баннера

/****************************/

var a = adriver(ar_ph);

/* OPTIONAL */
var myListener = {
	hide: function(panel, arg){
		//debug('Do hide to ' + panel);
		
		return true;
	},
	show: function(panel, arg){
		//debug('Do show to ' + panel);
		return true;
	}
};
/* END OPTIONAL */

new adriver.Plugin.require("pixel.adriver","checkFlash.adriver", "makeFlash.adriver", "makeImage.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_pix);
			adriver.extend(a.p.style, {zIndex: 65000, position: (window.attachEvent?'absolute':'fixed'), top:"0px", left:"0px", width:ar_width+"px", height:ar_height+"px",margin:0, padding:0});
			document.body.appendChild(a.p);
			a.reposition = function(){
				if(window.attachEvent){
					var s = a.p.style, g = a.getScreenGeometry();
					s.top = (g.ch+g.st - ar_height) + "px";
					s.left = (Math.ceil(g.sw/2)-ar_width/2) + "px";
				}else{
					var s = a.p.style, g = a.getScreenGeometry();
					s.top = (g.ch - ar_height) + "px";
					s.left = (Math.ceil(g.cw/2)-ar_width/2) + "px";
				}
			}
			a.p.innerHTML = a.hasFlash(ar_flash_ver)&&ar_swf?a.makeFlash(ar_swf):a.makeImage(ar_gif, ar_gif_href, ar_width, ar_height);
			a.addEvent(window, 'resize', a.reposition);
			if(window.attachEvent)a.addEvent(window, 'scroll', a.reposition);
			a.reposition();
		
		a.loadComplete();
	})
});