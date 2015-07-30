 // v2.02
function findObject(idname) {
	if (document.getElementById) { return document.getElementById(idname); }
	else if (document.all) { return document.all[idname]; }
	else if (document.layers) { return document.layers[idname]; }
	return null;
}

function findTags(parentobj, tag) {
	if (typeof parentobj.getElementsByTagName != 'undefined') { return parentobj.getElementsByTagName(tag); }
	else if (parentobj.all && parentobj.all.tags) { return parentobj.all.tags(tag); }
	return null;
}

var sDivObj, dDivObj;
function show() {
	if (!iframe) iframe = findTags(document, 'iframe');
	if (iframe) {
		for (var i = 0; i < iframe.length; i++) {
			iframeW[i] = iframe[i].width;
			iframe[i].width = 0;
		}
	}
	if (!sel) sel = findTags(document, 'select');
	if (sel) {
		for (var i = 0; i < sel.length; i++) {
			selW[i] = sel[i].style.width;
			sel[i].style.width = 0;
		}
	}
	if (!objf) objf = findTags(document, 'object');
	if (objf) {
		for (var i = 0; i < objf.length; i++) {
			objfW[i] = objf[i].style.width;
			if (objf[i].id != 'dBN') objf[i].style.width = 0;
		}
	}
	if (sDivObj = findObject('sDiv')) {
		sDivObj.style.display = 'none';
		sDivObj.style.visibility = "hidden";
	}
	if (dDivObj = findObject('dDiv')) {
		dDivObj.style.left = '0px';
		dDivObj.style.top = '0px';
		dDivObj.style.width = document.body.clientWidth+'px';
		dDivObj.style.height  = document.body.clientHeight+'px'; 
		dDivObj.style.display = 'block';
		dDivObj.style.visibility = "visible";
	}
	if (dBNObj = findObject('dBN')) dBNObj.SetVariable("over", 1);
}

function hide() {
	if (iframe) {
		for (var i = 0; i < iframe.length; i++) {
			iframe[i].width = iframeW[i];
		}
	}
	if (sel) {
		for (var i = 0; i < sel.length; i++) {
			sel[i].style.width = selW[i];
		}
	}
	if (objf) {
		for (var i = 0; i < objf.length; i++) {
			objf[i].style.width = objfW[i];
		}
	}
	if (dDivObj) {
		dDivObj.style.display = 'none';
		dDivObj.style.visibility = "hidden";
	}
	if (sDivObj) {
		sDivObj.style.display = 'block';
		sDivObj.style.visibility = "visible";
	}
	if (dBNObj = findObject('dBN')) dBNObj.SetVariable("over", 0);
}
















 
 <!--
var bannerURL = "http://ab.adpro.com.ua/c.cgi?cid=335&gid=242&mid=561&id=847";

var sFile = "";
var sWidth = 0;
var sHeight = 0;

ad_url = '?over=';
ad_url += (navigator.product == 'Gecko') ? '1' : 0;
ad_url += '&url='+escape(bannerURL);

var dFile = "";

var minWidth = 700;

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
	document.write('<div id=sDiv style="position: absolute; left: 0px; top: 0px; width: '+sWidth+'px; height: '+sHeight+'px; z-index:99998;">');
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width='+sWidth+' height='+sHeight+' id="sBN" align="middle">');
	document.write('<param name="movie" value="'+sFile+'" />'+
		'<param name="menu" value="false" />'+
		'<param name="quality" value="high" />'+
		'<param name="wmode" value="transparent" />');
	document.write('<embed src="'+sFile+'" menu="false" quality="high" wmode="transparent" '+
		'width='+sWidth+' height='+sHeight+' name="sBN" align="middle" '+
		'type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object></div>');

	document.write('<div id=dDiv style="display: none; position: absolute; left: 0px; top: 0px; width: '+dWidth+'px; height: '+dHeight+'px; z-index:99999;">');
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width=100% height=100% id="dBN" align="top">');
	document.write('<param name="movie" value="'+dFile+ad_url+'" />'+
		'<param name="quality" value="high" />'+
		'<param name="wmode" value="transparent" />');
	document.write('<embed src="'+dFile+ad_url+'" quality="high" wmode="transparent" '+
		'width=100% height=100% name="dBN" '+
		'type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object></div>');
}
//-->

