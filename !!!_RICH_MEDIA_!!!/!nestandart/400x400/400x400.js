<!--
var bannerURL = "http://link.ua";

var sFile = "2.swf";
var sWidth = 200;
var sHeight = 400;

ad_url = '?over=';
ad_url += (navigator.product == 'Gecko') ? '1' : 0;
ad_url += '&url='+escape(bannerURL);

var dFile = "4.swf";

var minWidth = 400;

var iframeW = new Array; var iframe = null;
var selW = new Array; var sel = null;
var objfW = new Array; var objf = null;

var BR = ((document.getElementById) || (document.all) || (document.layers)) ? 1 : 0;
var userAgent = navigator.userAgent.toLowerCase();
if ((!((userAgent.indexOf('msie') != -1) && (userAgent.indexOf('opera') == -1))) && (!(navigator.product == 'Gecko'))) BR = 0;
if (document.body.clientWidth <= minWidth) BR = 0;

dWidth = document.body.clientWidth;
dHeight = document.body.clientHeight; 

if ((BR) && (sFile) && (dFile)) {
	document.write('<div id=sDiv style="position: absolute; left: 300px; top: 100px; width: '+sWidth+'px; height: '+sHeight+'px; z-index:99998;">');
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width='+sWidth+' height='+sHeight+' id="sBN" align="middle">');
	document.write('<param name="movie" value="'+sFile+'" />'+
		'<param name="menu" value="false" />'+
		'<param name="quality" value="high" />'+
		'<param name="wmode" value="transparent" />');
	document.write('<embed src="'+sFile+'" menu="false" quality="high" wmode="transparent" '+
		'width='+sWidth+' height='+sHeight+' name="sBN" align="middle" '+
		'type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object></div>');

	document.write('<div id=dDiv style="display: none; position: absolute; left: 0px; top: 0px; width: '+dWidth+'px; height: '+dHeight+'px; z-index:99999;">');
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width=100% height=100% id="dBN" align="top">');
	document.write('<param name="movie" value="'+dFile+ad_url+'" />'+
		'<param name="quality" value="high" />'+
		'<param name="wmode" value="transparent" />');
	document.write('<embed src="'+dFile+ad_url+'" quality="high" wmode="transparent" '+
		'width=100% height=100% name="dBN" '+
		'type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object></div>');
}
//-->

