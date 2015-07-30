/****** Editable block ******/

var ar_swf = 'panel2.swf';
var ar_width = '1024px';
var ar_height = '770px';

var ar_flashver = 10;
var ar_title = 'AdRiver FullScreen';
var ar_pix = '0.gif'; // zeropixel if need
var ar_bgcolor		= 'transparent';
var ar_timer		= '0';
//***************************
/*
Adriver FullScreen banner.
Last edited by Alexandr Zonov 10.03.2011
*/

function httplize(s){return ((/^\/\//).test(s)?location.protocol:'')+s}
function ar_rnd_rep(s){return s.replace(/!\[rnd\]/g,RndNum4NoCash)}
function ar_setcookie(id, value){
	var expire = new Date(new Date().getTime() + ar_cookie.sec * 1000);
	ar_doc.cookie = id + '=' + escape(value) + '; expires=' + expire.toGMTString();
}
function ar_getcookie(id){
	var c=ar_doc.cookie;
	ar_doc.cookie='ar_cookie_accept=1';
	if(ar_doc.cookie.indexOf('ar_cookie_accept=1')==-1)return ar_cookie.val;
	if (!c.match(ar_cookie.name)) return 0;
	var i1=c.indexOf('=',c.indexOf(ar_cookie.name,0))+1,
		i2=c.indexOf(';',i1);
	if (i2 < 0) i2=c.length;
	return parseInt(c.substring(i1,i2), 10)||0;
}
function ar_flver(d,n,m,f){n=navigator;f='Shockwave Flash';if((m=n.mimeTypes)&&(m=m["application/x-shockwave-flash"])&&m.enabledPlugin&&(n=n.plugins)&&n[f]){d=n[f].description}else if(window.ActiveXObject){try{d=(new ActiveXObject((f+'.'+f).replace(/ /g,''))).GetVariable('$version')}catch(e){}}return parseInt(d?d.replace(/\D+/,'').split(/\D+/)[0]:0)}
function ar_e(v){return '&'+escape(typeof(v)=='undefined'?'':v)}

ar_bnum = window.ar_bnum || 1;
var ar_cookie={name:'ar_cheat',val:1,sec:60},
	ar_doc=top.document;

if(ar_flver()>=ar_flashver&&ar_getcookie(ar_cookie.name)!=ar_cookie.val){
	ar_setcookie(ar_cookie.name, ar_cookie.val);
	top.location.href = Mirror + '/fullloader.html?' + escape(top.location.href)
		+ ar_e(httplize(CgiHref))
		+ ar_e(Alt)
		+ ar_e(ar_width)
		+ ar_e(ar_height)
		+ ar_e(ar_rnd_rep((/^http(s|):\/\/|^\/\//i.test(ar_swf)?'':CompPath)+ar_swf))
		+ ar_e(bid)
		+ ar_e(ar_ntype)
		+ ar_e(httplize(CompPath))
		+ ar_e(ar_title)
		+ ar_e(Target.indexOf('_top') != -1 ? '_top' : '_blank')
		+ ar_e(ar_bt)
		+ ar_e(ar_adid)
		+ ar_e(ar_nid)
		+ ar_e(RndNum4NoCash)
		+ ar_e(sliceid)
		+ ar_e(ar_siteid)
		+ ar_e(ar_rnd_rep(ar_pix))
		+ ar_e(ar_bgcolor)
		+ ar_e(ar_timer)
		+ ar_e(unescape(window.ar_pass||''));
}
if(ar_doc.getElementById('ad_ph_'+ar_bnum)) setTimeout("document.close();",1000);