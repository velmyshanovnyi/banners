var ar_gif		= '0.gif'; // ��������
var ar_gif_href	= ''; // �������������� ���� �� ��������
var ar_pix		= ''; // �����������

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

new adriver.Plugin.require("checkFlash.adriver", "makeFlash.adriver", "makeImage.adriver", "MPU.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_pix);
		
		if (a.hasFlash(8)) {
			a.MPU = new adriver.MPU(a, {width:"1000px", height:"90px"}, myListener);
			
			var m_html = a.makeFlash('master.swf',{wmode:"opaque"}),
				p1_html = a.makeFlash('panel1.swf',{wmode:"opaque"}),
				p2_html = a.makeFlash('panel2.swf',{wmode:"opaque"});
			
			a.MPU.addPanel("master", {width:"120px", height:"600px", left:"1000px", top:"90px", position:"absolute", zIndex:1}, m_html);
			a.MPU.addPanel("panel1", {width:"1120px", height:"600px", position:"absolute", left:"0px", top:"90px", zIndex:2}, p1_html);
			a.MPU.addPanel("panel2", {width:"1120px", height:"90px", position:"absolute", left:"0px", top:"0px", zIndex:1}, p2_html);
			
			a.MPU.start();
		}
		else if (ar_gif) {
			//a.addDiv(a.p, {position:"relative"},a.makeImage(ar_gif, ar_gif_href, 240, 400););
			a.p.innerHTML = a.makeImage(ar_gif, ar_gif_href, 1120, 90);
		}
		
		a.loadComplete();
	})
});