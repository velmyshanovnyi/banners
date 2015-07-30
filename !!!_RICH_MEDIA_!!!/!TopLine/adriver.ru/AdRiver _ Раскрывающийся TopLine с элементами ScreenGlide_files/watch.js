function ya_escape(str,l) {
    if (!l) l = 256;
    if (str==null) return '';
    if (str.length>l) str=str.substr(0,l);
    return escape(str).replace(/\+/g, '%2B');
}
function ya_hit(goal_url, lcid, lclass) {
    if(typeof(ya_cid)=='undefined' && lcid == null) return false;
    if(typeof(lclass)=='undefined' && typeof(ya_class)!='undefined') {
        lclass=ya_class;
        ya_class=undefined;
    }
    if(typeof(lclass)=='undefined') lclass=0;
    if(lcid==null) lcid=ya_cid;
    var hash_key = lcid+':'+lclass;
    if (window.ya_hit_param == null) {
         window.ya_hit_param = new Array();
    }
    if (goal_url==null && hash_key in ya_hit_param) {
        return false;
    }
    ya_hit_param[hash_key]=1;

    var qs='rn='+Math.floor(Math.random()*1000000);
    if (lclass!=null) qs+='&cnt-class='+lclass;
    var w=window,d=w.document,n=w.navigator,l=d.location,bi='';
    if (goal_url != null) {
        qs+='&page-ref='+ya_escape(l.href,512);
        qs+='&page-url='+ya_escape('goal://'+d.domain+'/'+goal_url,512);
    } else {
        qs+='&page-ref='+ya_escape(d.referrer,512);
        qs+='&page-url='+ya_escape(l.href,512);
    }    
    if (n.javaEnabled()) bi+=(bi?':':'')+'j:1';
    if (w.screen) bi+=(bi?':':'')+'s:'+screen.width+'x'+screen.height+'x'+(screen.colorDepth?screen.colorDepth:screen.pixelDepth);
    var p=n.plugins;
    if (p && p.length) {
        for(var i=0;i<p.length;i++) {
            if (p[i].name.indexOf('Shockwave Flash')>=0) {
                bi+=(bi?':':'')+'f:'+escape(p[i].description.substr(16));
                break;
            }
        }
    } else if (w.ActiveXObject) {
        for(var i=10;i>=2;i--) {
            try {
                var f=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.'+i);
		try {bi+=(bi?':':'')+'f:'+f.GetVariable('$version').replace(/^[^0-9]*/,'').replace(/,/g,'.'); break;} catch(e) {}
                bi+=(bi?':':'')+'f:'+i+'.0';
                break;
            } catch(e) {}
        }
    }
    if (w!=top) bi+=(bi?':':'')+'fr:1';
    if (d.title) bi+=(bi?':':'')+'t:'+ya_escape(d.title,100);
    qs+='&browser-info='+bi;
    var hr=(l.protocol=='https:'?'https:':'http:')+"//bs.yandex.ru/watch/"+lcid+'?'+qs;
    if (d.createElement && d.body && d.body.firstChild) {
	var st = d.createElement("link");
	st.setAttribute("rel","stylesheet");
	st.setAttribute("href",hr+'&wmode=1');
	d.body.insertBefore(st,d.body.firstChild);
    } else {
	var i=new Image(1,1);
	i.src=hr;
    }
    if (goal_url != null) {
        var date = new Date();
        var start = date.getTime();
        for(var j = 1; j > 0; j++) {
          if (j % 1000 == 0) {
                date = new Date;
                var end = date.getTime();
                if(end - start > 100) break;
          }
        }
    }
    return true;
}
ya_hit();
