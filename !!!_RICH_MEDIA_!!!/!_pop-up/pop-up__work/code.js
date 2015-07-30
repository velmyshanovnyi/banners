
document.write('<style> .bOne-topLayer{ position:fixed; left:center; width:'+banner.width+'px; height:'+banner.heigth+'px; z-index:10000; top:'+banner.top+'; left:'+banner.left+';} * html .bOne-topLayer { position: absolute; top:expression(eval(document.documentElement.scrollTop + parseInt(300)) + \'px\'); } </style>');

document.write('<div id="bO_upper" class="bOne-topLayer" style="display:inline; ">');
document.write('<div id="bO_start" style="display:inline;">');
document.write('<object width="'+banner.width+'" height="'+banner.heigth+'" id="">');
document.write('<param name="movie" value="'+banner.file+'">');
document.write('<param name="FlashVars" value="hit='+banner.url+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+banner.version+'"  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" />');
document.write('<param name="wmode" value="'+banner.wmode+'" />');
document.write('<param name="quality" value="'+banner.quality+'" />');
document.write('<param name="allowScriptAccess" value="'+banner.allowscriptaccess+'" />');
document.write('<embed src="'+banner.file+'" allowscriptaccess="'+banner.allowscriptaccess+'"  FlashVars="hit='+banner.url+'" quality="'+banner.quality+'" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="'+banner.wmode+'" width="'+banner.width+'" height="'+banner.heigth+'"></embed></object></div></div>');