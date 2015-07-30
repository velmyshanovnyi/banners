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

