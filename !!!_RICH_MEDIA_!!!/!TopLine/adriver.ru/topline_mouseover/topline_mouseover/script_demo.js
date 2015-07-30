// ****** Editable block ******

var gifname = 'mts121_760x60v1.gif';
var smallflashname = 'mts121_760x60v1.swf';
var ar_height_small = 60;
var ar_width_small = '100%';
var bigflashname = 'mts121_760x300v4.swf';
var ar_width_big = '100%';
var ar_height_big = 300;
var ar_valign = 1; //top
var ar_align = 1; //left
var ar_flashver = 6;
var ar_alt_link = '';
var ar_zeropixel = '';

var ar_timeout = 5; // in seconds
	
/************************************/

ar_flashver = parseInt(ar_flashver);if(isNaN(ar_flashver)) ar_flashver = 0;

function ar_px(i){return (/^\d+$/.test(i)?i+'px':i)}

if (typeof window.ar_bnum=='undefined') var ar_bnum = 1;

var ar_d  = parent.document;
var ad_fr = ar_d.getElementById('ad_ph_' + ar_bnum);


var ar_comppath = CompPath;
var ar_big = (typeof(big) == 'undefined') ? 0 : big;
if (typeof(ar_ntype) == 'undefined') {var ar_ntype=0;}
var ar_html = '';
var ar_link = CgiHref;
ar_alt_link = ar_link + (ar_alt_link ?  '&rleurl=' + ar_alt_link : '');
if(location.href.indexOf('mngcgi')==-1&&ar_zeropixel!=''){
	if(document.createElement&&document.body){
		var i=document.createElement('img');
		i.style.display='none';i.style.width=i.style.height='0px';
		i.src=ar_zeropixel;
		document.body.appendChild(i);
	}
	else{document.write('<img src="'+ar_zeropixel+'" border=0 width=0 height=0>')}
}


function ar_object(comppath, flash, link, w, h, gif){
	if (flash.toUpperCase().indexOf("HTTP://") == 0) comppath='';
	var ar_src = comppath + flash;
	var wh = ' width="'+w+'" height="'+h+'"';

	if (!gif){
		function p(n,v){return '<param name="'+n+'" value="'+v+'">'}
		var ar_flashvars='link1=' + escape(link) + '&target=_blank&ar_comppath=' + escape(comppath) + '&ar_big=' + ar_big + '&ar_ntype=' + ar_ntype;
		ar_src += (ar_src.indexOf('?')!=-1 ? '&' : '?') + ar_flashvars;
		var s = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="ar_flash_'
		+ Math.round(Math.random()*1000000) + '"' + wh + '>'
		+ p('movie',ar_src)
		+ p('menu','false')
		+ p('wmode','opaque')
		+ p('allowscriptaccess','always')
		+ p('quality','high')
		+ p('loop','true')
		+ p('flashvars',ar_flashvars)
		+ '<embed type="application/x-shockwave-flash" src="' + ar_src + '"' + wh 
		+ ' play=true wmode=opaque allowScriptAccess=always loop=true quality=best flashvars="'
		+ ar_flashvars + '" menu=false></embed></object>';
	}
	else {
		var s = '<a href="' + link + '" target=_blank><img src="' + ar_src + '" border=0' + wh + '></a><br>';
	}
	
	return s;
}

function im_setVis(obj, v){ar_d.getElementById(obj+ar_big).style.visibility = v}
function showSG(){
    im_setVis("sg_big", "visible");
    im_setVis("sg_small", "hidden");
}
function hideSG(){
    im_setVis("sg_big", "hidden");
    im_setVis("sg_small", "visible");
}
function ar_s(){
    var o1 = ar_d.getElementById("sg_small"+ar_big);
	var o2 = ar_d.getElementById("sg_big"+ar_big);
    if (o1&&o2) {
		o1.onmouseover = showSG;
		o2.onmouseout = hideSG;
		
		o2.style[(ar_valign==1?'top':'bottom')] = '0px';
		o2.style[(ar_align==1?'left':'right')] = '0px';
		
		showSG();
		setTimeout(hideSG, 1000*ar_timeout);
	}
    else setTimeout(arguments.callee, 100);
}
function ar_flver(d,n,m,f){
	n=navigator;f='Shockwave Flash';
	if((m=n.mimeTypes)&&(m=m["application/x-shockwave-flash"])&&m.enabledPlugin&&(n=n.plugins)&&n[f]){d=n[f].description}
	else if(window.ActiveXObject){try{d=(new ActiveXObject((f+'.'+f).replace(/ /g,''))).GetVariable('$version')}catch(e){}}
	return d?d.replace(/\D+/,'').split(/\D+/)[0]:0;
}

if (ar_flashver<=ar_flver()){
	ar_html = '<div style="position:relative;width:'+ar_px(ar_width_small)+';height:'+ar_px(ar_height_small)+';">'
	+ '<div id="sg_small' + ar_big + '">'
	+ ar_object(ar_comppath, smallflashname, ar_link, ar_width_small, ar_height_small)
	+ '</div><div id="sg_big' + ar_big + '" style="position:absolute;visibility:hidden;width:'+ar_px(ar_width_big)+';height:'+ar_px(ar_height_big)+';">'
	+ ar_object(ar_comppath, bigflashname, ar_link, ar_width_big, ar_height_big)
	+ '</div></div>';
}
else ar_html = ar_object(ar_comppath, gifname, ar_alt_link, ar_width_small, ar_height_small, 1);

if (ad_fr) {
	ad_fr.style.display="block";
    ad_fr.innerHTML = ar_html;
    setTimeout("document.close();",1000);
}
else document.write(ar_html);
ar_s();