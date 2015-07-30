function richClose(){
	getURL('javascript:adriver("' + _root.ar_ph + '").panels[' + _root.richId + '].close()', '_self');
}
function richNext(){
	getURL('javascript:adriver("' + _root.ar_ph + '").panels[' + _root.richId + '].next()', '_self');
}
function richClick(url){
	var link = _root.link1;
	if (url && url != ''){
		if(!link || link == '') link = url;
		else link += escape(url);
	}
	getURL(link, _root.target);
	richClose();
}