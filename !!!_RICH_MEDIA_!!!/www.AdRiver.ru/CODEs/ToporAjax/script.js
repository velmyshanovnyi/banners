var ar_swf			= 'topor.swf',
	
	ar_img_top		= 'top.gif',
	ar_img_right	= 'right.gif',
	
	ar_swf_width	= '1100',
	ar_swf_height	= '600',
	
	ar_right_width	= '120',
	ar_top_height	= '90',

	ar_flashver		= '8',
	ar_wmode		= 'opaque',
	ar_quality		= 'best',

	ar_flash_pixel	= '',
	ar_gif_pixel	= '',

/* Do not touch any below */

a = adriver(ar_ph);

new adriver.Plugin.require("checkFlash.adriver", "makeFlash.adriver", "makeImage.adriver", "pixel.adriver", "functions.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(a.hasFlash(ar_flashver)&&ar_swf ? ar_flash_pixel : ar_img_top||ar_img_right ? ar_gif_pixel : '');

		adriver.extend(a.p.style, {position: 'relative', height: a.normalize(ar_top_height), zIndex: 0});
		a.addDiv(a.p, {position: 'absolute', right: '-' + a.normalize(ar_right_width)}, a.hasFlash(ar_flashver)&&ar_swf 
			? a.makeFlash(ar_swf, {quality:ar_quality, wmode:ar_wmode}, ar_swf_width, ar_swf_height)
			: (ar_img_top ? '<div style="position: absolute; right: 0px;">' + a.makeImage(ar_img_top, '', ar_swf_width, ar_top_height) + '</div>' : '')
				+ (ar_img_right ? a.makeImage(ar_img_right, '', ar_right_width, ar_swf_height) : ''));

		a.loadComplete();
	})
});