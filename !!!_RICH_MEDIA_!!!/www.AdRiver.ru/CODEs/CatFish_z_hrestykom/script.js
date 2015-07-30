var panels = [
		{swf: '100.swf', width: '100%', height: '200', x: '0.5', y: '1', abs_x: '0', abs_y: '0', wmode: 'opaque'}
	],
	ar_flashver		= '8',
	ar_zeropixel	= "http://aoua.hit.gemius.pl/redot.gif?l=8/tstamp='+(new%20Date()).getTime()+'/id=nLDg9IvHG6U5GzdllM6L74XBfUqFqru9GzYucOMSRR..R7/stparam=ymhlltmlwy/fastid=1224979098645796982"; // зеропіксель - 1 (лінк), якщо нема лишаємо порожнім;
	ar_zeropixel2	= "http://counter.opinion.com.ua/test/counter.php?rnd='+Math.round(Math.random()*100000)+'&q=1021063185&c=1"; // зеропіксель - 2 (лінк), якщо нема лишаємо порожнім;
	ar_zeropixel3	= ""; // зеропіксель - 3 (лінк), якщо нема лишаємо порожнім;
/*------- no edit -------*/

var a = adriver(ar_ph);

new adriver.Plugin.require(	"pixel.adriver", "functions.adriver", "checkFlash.adriver",
							"makeFlash.adriver", "animate.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_zeropixel);
		a.sendPixel(ar_zeropixel2);
		a.sendPixel(ar_zeropixel3);
		
		if (a.hasFlash(ar_flashver)) {
			for(var i=0; i<panels.length; i++){
				var o = panels[i];
				adriver.animate.richMedia(a,
				a.addDiv(document.body, {zIndex: 65000, position: 'absolute', visibility: 'hidden',
					left: a.normalize(o.abs_x), top: a.normalize(o.abs_y), width:a.normalize(o.width), height:a.normalize(o.height)},
					a.makeFlash(o.swf, {flashvars: {richId: i}, wmode: o.wmode})),
				o.x, o.y);
			}
			a.panels[0].start(true);
		}
		
		a.loadComplete();
	})
});