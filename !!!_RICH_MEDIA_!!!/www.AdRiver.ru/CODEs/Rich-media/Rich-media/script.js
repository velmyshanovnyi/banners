var panels = [
		{swf: '0.swf', width: '350', height: '350', x: '0.5', y: '0.5', abs_x: '0', abs_y: '0', wmode: 'transparent'},
		{swf: '1.swf', width: '300', height: '300', x: '1', y: '0', abs_x: '0', abs_y: '0', wmode: 'opaque'}
	],
	ar_flashver		= '8',
	ar_zeropixel	= '';
/*------- no edit -------*/

var a = adriver(ar_ph);

new adriver.Plugin.require(	"pixel.adriver", "functions.adriver", "checkFlash.adriver",
							"makeFlash.adriver", "animate.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_zeropixel);
		
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