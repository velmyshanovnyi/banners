
<!-- saved from url=(0040)http://0day.kiev.ua/adriver_async-fix.js -->
<html autopagermatchedrules="1"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1251"><style type="text/css"></style></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/********** adriverFix AsyncJS loader V1.1 *************/
function debug(){}

function adriverFix (ph, prm, defer) {  
	try {
		this.ph = ph; 
		this.prm = {};
		for (var i in this.defaults) this.prm[i] = this.defaults[i];
		for (var i in prm) this.prm[i] = prm[i];
		for (var i in this.prm) this.req += i + "=" + this.prm[i] + "&amp;";
		if(!adriverFix.items){ 
			adriverFix.items = {};
			adriver.items = {}; // hack
			this.addHandlers();
			this.checkFlash();
		}
		this.p = document.getElementById(ph);
		this.p.adriverFix = this;
		this.p.adriver = this; // hack
//		alert(this.p.adriverFix + '\n' + this.p.adriver);
		adriverFix.items[ph] = this;
		adriver.items[ph] = this; //hack
		defer || this.load(); 
	}catch(e){}
}

adriverFix.prototype.ver = "1.1";
adriverFix.prototype.flashVer = [0];
adriverFix.prototype.domReady = false;
adriverFix.prototype.handlers = [];
adriverFix.prototype.defaults = {tail256: (document.referrer ? escape(document.referrer) : 'unknown')};
adriverFix.prototype.h = document.getElementsByTagName("head").item(0);
adriverFix.prototype.req = "http://ad.adriver.ru/cgi-bin/erle.cgi?";

		
adriverFix.prototype.loadScript = function(req, m){ //m - flag. set when loading from mirror
try {
		m || (req += "ph=" + this.ph + "&amp;rnd=" + Math.round(Math.random()*10000));
		var s = document.createElement("script");
		s.setAttribute("type", "text/javascript");
		s.setAttribute("charset", "windows-1251");
		s.setAttribute("src", req);
		this.s = s;
		this.h.insertBefore(s, this.h.firstChild); 
	}catch(e){}
}

adriverFix.prototype.detachScript = function (){ try{ this.h.removeChild(this.s) }catch(e){}}

adriverFix.prototype.load = function (){	try{ this.loadScript(this.req) }catch(e){}}

adriverFix.prototype.onDomReady = function (f) {try{ this.domReady ? f() : this.handlers.push(f) }catch(e){}}


/************ dom ready state check **********************/

adriverFix.prototype.runHandlers = function(old_handler){
	try {
		if (old_handler){old_handler() }
		if (!this.domReady){
			adriverFix.prototype.domReady = true;
			var f; while (f = this.handlers.shift()) f();
		}
	}catch(e){}
}

adriverFix.prototype.addHandlers = function(){
	try {
		var d = document, t = this, safariTimeout;

		if (/WebKit/i.test(navigator.userAgent)) {
			safariTimeout = setInterval(function(){if (/loaded|complete/.test(d.readyState)) {clearInterval(safariTimeout); t.runHandlers() }}, 100);
		} else if (d.addEventListener) {
			d.addEventListener("DOMContentLoaded", function(){t.runHandlers()}, false);
		} else if (d.all &amp;&amp; !window.opera) {
			var s = d.createElement("script");
			s.setAttribute("type", "text/javascript");
			s.setAttribute("src", "");			
			s.setAttribute("defer", "true");
			s.onreadystatechange = function(){if (this.readyState == "complete") t.runHandlers()} 
			this.h.insertBefore(s, this.h.firstChild); 
		}
		var old_handler = window.onload;
		window.onload = function(){t.runHandlers(old_handler)};
	} catch (e){}
}


adriverFix.prototype.checkFlash = function(req){
	debug("checking flash");
	try {
		if (req) return (this.flashVer[0] &gt;= req);

		var d, n = navigator, m, f = 'Shockwave Flash';
		if((m = n.mimeTypes) &amp;&amp; (m = m["application/x-shockwave-flash"]) &amp;&amp; m.enabledPlugin &amp;&amp; (n = n.plugins) &amp;&amp; n[f]) {d = n[f].description}
		else if (window.ActiveXObject) { debug ("activeX flash detect"); try { d = (new ActiveXObject((f+'.'+f).replace(/ /g,''))).GetVariable('$version');} catch (e) {debug ("error in activeX detection")}} 
		debug ("version obj: " + d);
		if (d) adriverFix.prototype.flashVer = d.replace(/\D+/,'').split(/\D+/);
	
		debug ("flash " + this.flashVer + " detected");
	} catch (e){}
	return false;
}

//============optional components=================//

adriverFix.prototype.setAnchor = function (){this.anchor = this.addDiv(this.p, {position:"relative"});}

adriverFix.prototype.addPanel = function (id, params, inner, holder){ 
	debug("add panel" + id);
	var panel = null;
	try {
		if (!this.panels){
			this.panels = {};
		}
		panel = this.addDiv(holder || this.anchor, params, inner)
		this.panels[id] = panel;
	}catch(e){}
	return panel;
}

adriverFix.prototype.addDiv = function (o, params, inner){
	var n = null;
	try {
		n = document.createElement("DIV");
		for (var i in params){ n.style[i] = params[i] } 
		if (inner) n.innerHTML = inner;
		o.insertBefore(n, o.firstChild); 
	}catch(e){}
	return n;
}

function adriver_dispatcher(ph, panel, command, arg){
	debug("dispatching " + command + ": " + arg + " to " + ph + "." + panel);
	try {
		var a = adriverFix.items[ph];
		var a = adriver.items[ph];//hack
		if (a &amp;&amp; a.dispatch) a.dispatch(panel, command, arg);
	} catch (e) {}
}

//============optional components=================//
</pre></body></html>