import flash.external.ExternalInterface;

	System.security.allowDomain("*");

	if (_root.ar_ph == undefined) _root.ar_ph = ''; 
	if (_root.ar_comppath == undefined) _root.ar_comppath = '';
	if (_root.target == undefined) _root.target = '_blank';

	var initDoneFunc = function(){};
	var syncDispatcherFunc = function(){};

	ExternalInterface.addCallback("dispatch", null, function(command, panel, arg){
		switch (command){
			case "sync":	syncDispatcherFunc(panel, arg);
							break;
			case "start":	initDoneFunc();
							break;
		}
		
		return true;
	});
	
	var sendToJS = function(command, panel, arg){
		ExternalInterface.call("adriver('" + _root.ar_ph + "').MPU.dispatch", panel, command, arg);
	}
	var showPanel = function(panel){sendToJS("show", panel)}
	var hidePanel = function(panel){sendToJS("hide", panel)}
	var sendEvent = function(id){sendToJS("event", null, id)}
	var sendToPanel = function(panel, command, arg){sendToJS(command, panel, arg)}
	
	var makeClick : Function = function (url) : Void {
		var link = _root.link1;
		if (url && url != ""){
			if(!link || link == "") link = url;
			else link += escape(url);
		}
		getURL(link, _root.target);
	}
	
	var registerMaster = function(initDone, syncDispatcher){
		if (initDone) initDoneFunc = initDone;
		if (syncDispatcher) syncDispatcherFunc = syncDispatcher;
		
		sendToJS("register", "master");
	}
stop();