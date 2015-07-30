banner_path = 'http://bbn.img.com.ua/n/';

ad_burl = '?bn_url='+escape(bn_url);

bId730x90 = ; //edit
bId730x200 = ; //edit
banner_src730 = banner_path + bId730x90 + '.swf'+ad_burl;
banner_src730x200 = banner_path + bId730x200 + '.swf'+ad_burl;
l = 730;
h = 110+90;

var NS=(navigator.appName.indexOf("Netscape")>=0&&parseFloat(navigator.appVersion)>=4)?1:0;
var IE=(document.all)?1:0;
var MZ=(document.getElementById)?1:0;

function IEPageX(objname){
 var obj = document.all(objname);
 var tmp = obj.offsetLeft;
 while (obj.offsetParent != null) {
  obj = obj.offsetParent;
  tmp += obj.offsetLeft;
  if (obj.tagName == 'BODY') break;
  } return tmp;
}

function IEPageY(objname){
 var obj = document.all(objname);
 var tmp = obj.offsetTop;
 while (obj.offsetParent != null) {
  obj = obj.offsetParent;
  tmp += obj.offsetTop;
  if (obj.tagName == 'BODY') break;
  } return tmp;
}

function high(which2){
 var Ltop = IEPageY('mini');
 var Lleft = IEPageX('mini');
 if(IE){
    document.all[which2].style.top=Ltop;
    document.all[which2].style.left=Lleft;
    document.all['sgHi'].Rewind();
    document.all['sgHi'].Play();
    document.all[which2].style.visibility="visible";
 } else if (MZ){
    document.getElementById(which2).style.top=Ltop;
    document.getElementById(which2).style.left=Lleft;
    document.getElementById('sgHi').Rewind();
    document.getElementById('sgHi').Play();
    document.getElementById(which2).style.visibility="visible";
 } else if (NS){ 
    document.layers[which2].style.top=Ltop;
    document.layers['sgHi'].Rewind();
    document.layers['sgHi'].Play();
    document.layers[which2].style.left=Lleft;
    document.layers[which2].visibility="show";
 }  
}

function low(which2){
 if(IE){
   document.all['sgLow'].Rewind();
   document.all[which2].style.visibility="hidden"; 
   document.all['sgLow'].Play();
 } else if (MZ){
   document.getElementById('sgLow').Rewind();
   document.getElementById(which2).style.visibility="hidden"; 
   document.getElementById('sgLow').Play();
 } else if (NS){ 
   document.layers['sgLow'].Rewind();
   document.layers[which2].visibility="hide";
   document.layers['sgLow'].Play();
 }
}


document.writeln('<span class="mainbanner" id=mini><object width=730 height=90 id=sgLow><param name=movie value='+banner_src730+'><param name=quality value=high><param name=wmode value=transparent>');
document.writeln('<embed width=730 height=90 name=sgLow src='+banner_src730+' quality=high type="application/x-shockwave-flash"  luginspage="http://www.macromedia.com/go/getflashplayer"></embed></object></span>');


var sStyle="";
var str="";                  
var lTop = IEPageY('mini');
var lLeft = IEPageX('mini');
if(IE) {sStyle='<div class="mainbanner" id=full style="visibility: hidden; position: absolute; left: '+lLeft+'px; top: '+lTop+'px; width: '+l+'; height: '+h+'px;">';}
  else if (MZ) {sStyle='<div id=full style="visibility: hidden; position: absolute; left: '+lLeft+'px; top: '+lTop+'px; width: '+l+'; height: '+h+'px;">';}
    else if (NS) {sStyle='<layer class="mainbanner" id=full visibility=hide left='+lLeft+' top='+lTop+' width='+l+' height='+h+'" onmouseout="this.visibility=\'hide\'" >';}
 if(sStyle!=null){
 document.writeln(sStyle);

 document.writeln('<object width='+l+' height='+h+' id=sgHi><param name=movie value='+banner_src730x200+'><param name=quality value=high><param name=wmode value=transparent><embed src='+banner_src730x200+' quality=high width='+l+' height='+h+' swLiveConnect=true name=sgHi type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>');

if(IE){document.writeln('</div>');}
  else if (MZ) {document.writeln('</div>');}
  else if (NS) {document.writeln('</layer>');}
}



function show() {
	high('full')
}
function hide() {
	low('full');
}