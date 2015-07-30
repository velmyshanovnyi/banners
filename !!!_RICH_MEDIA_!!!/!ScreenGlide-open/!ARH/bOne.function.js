bO_timeOut = Array();
function bO_hideUpper(id){
	//alert("out")
	if(document.getElementById(id).style.display == "block"){
		
		//var bO_tmpString = 'document.getElementById("'+id+'").style.display = "none"';
		//bO_timeOut[id] = setTimeout(bO_tmpString,400);
		bO_timeOut[id]= setTimeout("bOneCommand('close')",400);
	}
}

function bO_hideUpperBreak(id){
	clearTimeout(bO_timeOut[id]);
}


////////// getURL part ////////////////////////////////////////////////////

function bOneCommand(arg){
	var START = document.getElementById("bO_start");
	var UPPER = document.getElementById("bO_upper");
	var INTRO = document.getElementById("bO_intro");
	var STEP2 = document.getElementById("bO_step2"); 
	var STEP3 = document.getElementById("bO_step3");
	if(arg == "open"){
			
		document.getElementById("bO_upper").style.display = "inline";
		if(START){
				START.style.display = "none";
		}

	}else if(arg == "close"){

		document.getElementById("bO_upper").style.display = "none";
		//bO_hideUpper("bO_upper");
		if(START){
				START.style.display = "inline";
		}
	
	}else if(arg == "close_with_delay"){

		bO_hideUpper("bO_upper");
	
	}else if(arg == "close_upper"){

		document.getElementById("bO_upper").style.display = "none";
	
	}else if(arg == "close_now"){

		document.getElementById("bO_upper").style.display = "none";
	
	}else if(arg == "fide_intro" || arg == "hide_intro"){
		
		document.getElementById("bO_intro").style.display = "none";
		if(document.getElementById("bO_start").style.display == "none")
			document.getElementById("bO_start").style.display = "block";

	}else if(arg == "to_step1"){
			
			if(STEP2) STEP2.style.display = "none";
			if(STEP3) STEP3.style.display = "none";
			START.style.display = "block";
			
	}else if(arg == "to_step2"){
			
			if(START) START.style.display = "none";
			if(STEP3) STEP3.style.display = "none";
			STEP2.style.display = "inline";
	
	}else if(arg == "to_step3"){
			
			if(START) START.style.display = "none";
			if(STEP2) STEP2.style.display = "none";
			STEP3.style.display = "inline";
	
	}else if(arg == "startSlideClose"){
			bO.slideOut();
			//alert("d")
	}else if(arg == "slideUp_intro"){
			bOneSlide('bO_intro', {duration:1,newHeight:100,onComplete: function() {
		START.style.display = "inline";
			} }).up();

	}else if(arg == "slideUp"){
			bOneSlide('bO_upper', {duration:1,newHeight:100,onComplete: function() {
		START.style.display = "inline";
			}}).up();

	}else if(arg == "slideDown"){
			START.style.display = "none";
			if(UPPER.style.display == "none")
			bOneSlide('bO_upper', {duration:1,newHeight:100}).down();
	
	}else{
		alert("unknown argument: " + arg);
	}
	//return true;
}

//------------------------------------------------------------------------


////////// FSCommand PART /////////////////////////////////////////////////
var InternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
// Handle all the the FSCommand messages in a Flash movie
function fscommand_DoFSCommand(command, args) {
	var fscommandObj = InternetExplorer ? bO.bannerName : document.eval(bO.bannerName);

	if(command == "open"){
		document.getElementById("bO_upper").style.display = "inline";
	}


}
// Hook for Internet Explorer 
if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
	document.write('<SCRIPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('Sub fscommand_FSCommand(ByVal command, ByVal args)\n');
	document.write('  call fscommand_DoFSCommand(command, args)\n');
	document.write('end sub\n');
	document.write('</SCRIPT\> \n');
}
//--------------------------------------------------------------------------

////////////// COOCKIE ////////////////////////////////////////////////////
bO_cookieName = "bOne.cookie_" + document.domain;
function createCookie(name,value,days) {
    if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
    }
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
}
					
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

//--------------------------------------------------------------------------

// RichMedia

var bObhBasicParam = Array();

function bOneScrollBanner(){

    var bhName = "bO_upper";
    var bh = document.getElementById(bhName);

    var offsetX = 0;
    var offsetY = 0;
    if(!window.pageYOffset) {
        if(!(document.documentElement.scrollTop == 0)){
            offsetY = document.documentElement.scrollTop;
            offsetX = document.documentElement.scrollLeft;
        } else {
            offsetY = document.body.scrollTop;
            offsetX = document.body.scrollLeft;
        }
    } else {
        offsetX = window.pageXOffset;
        offsetY = window.pageYOffset;
    }

    //bh.style.position="fixed";

    if(!bObhBasicParam[bhName]){
        bObhBasicParam[bhName] = Array();
        bObhBasicParam[bhName]["top"] = parseInt(bh.style.top);
    }

    var bhBottomY = offsetY + parseInt(bh.style.height) + bObhBasicParam[bhName]["top"];

    //alert(document.body.scrollHeight)
 
    bh_newTop = offsetY + bObhBasicParam[bhName]["top"] + "px";
    bh.style.top = bh_newTop;
}


function bOneShowOnce(e,cookieName){
    alert(e.id + " : " + cookieName);

}
//--------------------------------------------------------------------------

function bOneAddEvent(obj, evType, fn){ 
		if (obj.addEventListener){ 
				obj.addEventListener(evType, fn, false); 
				return true; 
		} else if (obj.attachEvent){ 
				var r = obj.attachEvent("on"+evType, fn); 
				return r; 
		} else { 
				return false; 
		} 
}

bOne_documentLoad = false;
function bOneSetOnload(arg){
	bOne_documentLoad = arg;
}

//bOneAddEvent(document.body, "load", bOneSetOnload('true'));

/*SLIDE*/
var slideInUse = new Array();

function bOneSlide(objId, options) {
this.obj = document.getElementById(objId);
this.duration = 1;
this.height = parseInt(this.obj.style.height);

if(typeof options != 'undefined') { this.options = options; } else { this.options = {}; }
if(this.options.duration) { this.duration = this.options.duration; }

this.up = function() {
this.curHeight = this.height;
this.newHeight = this.options.newHeight ? this.options.newHeight : '1';
if(slideInUse[objId] != true) {
var finishTime = this.slide();
window.setTimeout("bOneSlide('"+objId+"').finishup("+this.height+");",finishTime);
}
}

this.down = function() {
this.newHeight = this.height;
this.curHeight = this.options.newHeight ? this.options.newHeight : '1';
if(slideInUse[objId] != true) {
this.obj.style.height = this.options.newHeight ? this.options.newHeight : '1' + 'px';
this.obj.style.display = 'block';
this.slide();
}
}

this.slide = function() {
slideInUse[objId] = true;
var frames = 30 * duration; // Running at 30 fps

var tIncrement = (duration*1000) / frames;
tIncrement = Math.round(tIncrement);
var sIncrement = (this.curHeight-this.newHeight) / frames;

var frameSizes = new Array();
for(var i=0; i < frames; i++) {
if(i < frames/2) {
frameSizes[i] = (sIncrement * (i/frames))*4;
} else {
frameSizes[i] = (sIncrement * (1-(i/frames)))*4;
}
}

for(var i=0; i < frames; i++) {
this.curHeight = this.curHeight - frameSizes[i];
window.setTimeout("document.getElementById('"+objId+"').style.height='"+Math.round(this.curHeight)+"px';",tIncrement * i);
}

window.setTimeout("delete(slideInUse['"+objId+"']);",tIncrement * i);

if(this.options.onComplete) {

window.setTimeout(this.options.onComplete, tIncrement * i);
}

return tIncrement * i;
}

this.finishup = function(height) {
this.obj.style.display = 'none';
this.obj.style.height = height + 'px';
}

return this;
}
/*/ SLIDE --------*/


