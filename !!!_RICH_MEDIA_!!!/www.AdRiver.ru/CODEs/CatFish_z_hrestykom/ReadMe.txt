// AdRiver CatFish - з робочим "хрестиком"
// (без заглушок і інших "пряників")
// Змінювати можна ТІЛЬКИ ці параметри, інакше є шанс що скрипт поламається:
//  swf: '100.swf'      - назва файла. Бо цей код крутить ТІЛЬКИ файли а не лінки! (маса файла має бути аналогічна до стандартних вимог АдРівера, наразі це до 75Кб для .swf)
//  width: '100%'       - ШИРИНА (або просто без нічого, тоді воно працюватиме в пікселях; або у відсотках.);
//  height: '200'       - ВИСОТА (або просто без нічого, тоді воно працюватиме в пікселях; або у відсотках.);
//  ar_zeropixel	= ""; - зеропіксель - 1 (лінк), якщо нема лишаємо порожнім;
//  ar_zeropixel2	= ""; - зеропіксель - 2 (лінк), якщо нема лишаємо порожнім;
//  ar_zeropixel3	= ""; - зеропіксель - 3 (лінк), якщо нема лишаємо порожнім;
// ВСЕ ІНШЕ НЕ ЧІПАЄМО!!!!!
// ВСЕ ЩО ТРЕБА ВЖЕ ОПИСАНО ТУТ!!!



// ---------------------- script.js  START -------------------------------------
var panels = [
		{swf: '100.swf', width: '100%', height: '200', x: '0.5', y: '1', abs_x: '0', abs_y: '0', wmode: 'opaque'}
	],
	ar_flashver		= '8',
	ar_zeropixel	= ""; // зеропіксель - 1 (лінк), якщо нема лишаємо порожнім;
	ar_zeropixel2	= ""; // зеропіксель - 2 (лінк), якщо нема лишаємо порожнім;
	ar_zeropixel3	= ""; // зеропіксель - 3 (лінк), якщо нема лишаємо порожнім;
/*------- no edit -------*/

var a = adriver(ar_ph);

new adriver.Plugin.require(	"pixel.adriver", "functions.adriver", "checkFlash.adriver",
							"makeFlash.adriver", "animate.adriver").onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixel(ar_zeropixel);
		a.sendPixel(ar_zeropixel2);
		a.sendPixel(ar_zeropixel3);
		
		if (a.hasFlash(ar_flashver)) {
			for(var i=0; i<panels.length; i++){
				var o = panels[i];
				adriver.animate.richMedia(a,
				a.addDiv(document.body, {zIndex: 65000, position: 'absolute', visibility: 'hidden',
					left: a.normalize(o.abs_x), top: a.normalize(o.abs_y), width:a.normalize(o.width), height:a.normalize(o.height)},
					a.makeFlash(o.swf, {flashvars: {richId: i}, wmode: o.wmode})),
				o.x, o.y);
			}
			a.panels[0].start(true);
		}
		
		a.loadComplete();
	})
});
// ---------------------- script.js  END ---------------------------------------




/*
********************************************************************************
********************************************************************************
********************************************************************************

// ----- прошивка для КНОПКИ БАНЕРА "btn"  ------------------------------------- START
on (release)
{
    getURL(_root.link1, "_blank");
    richClose();
}
// ----- прошивка для КНОПКИ БАНЕРА "btn"  ------------------------------------- END




// ----- прошивка для КНОПКИ БАНЕРА "хрестик"  --------------------------------- START
on (release)
{
    richClose();
}
// ----- прошивка для КНОПКИ БАНЕРА "хрестик"  --------------------------------- END


// як зробити CatFish - з робочим "хрестиком"
// ---------- ДОДАТКОВА ОПРАЦЬОВКА КЛІКІВ, (ВСТАВИТИ В ПЕРГИЙ КАДР КНОПКИ) ----- START
// нижченаведений код ВСТАВИТИ В ПЕРГИЙ КАДР КНОПКИ БАНЕРА "btn" 

if(ar_init == undefined){
 ar_init = true;
 System.security.allowDomain('*');
}

// власне нижче сам код

function richClose()
{
    getURL("javascript:adriver(\"" + _root.ar_ph + "\").panels[" + _root.richId + "].close()", "_self");
}
function richNext()
{
    getURL("javascript:adriver(\"" + _root.ar_ph + "\").panels[" + _root.richId + "].next()", "_self");
}
function richClick(url)
{
    var __reg2 = _root.link1;
    if (url && url != "") 
    {
        if (!__reg2 || __reg2 == "") 
        {
            __reg2 = url;
        }
        else 
        {
            __reg2 = __reg2 + escape(url);
        }
    }
    getURL(__reg2, _root.target);
    richClose();
}
// ---------- ДОДАТКОВА ОПРАЦЬОВКА КЛІКІВ, ВСТАВИТИ В ПЕРГИЙ КАДР КНОПКИ ------- END

********************************************************************************
********************************************************************************
********************************************************************************
*/