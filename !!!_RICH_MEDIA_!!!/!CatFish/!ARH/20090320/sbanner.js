var divId = 'div_banner';
var tableId = 'table_banner'
var bWidth = 800;
var bHeight = 35;
var shift = 1;
var leftPos;

function start()
{
    setInterval("roll()", 30);
    vAlignment();
    document.getElementById(divId).style.visibility = 'visible';
}

function vAlignment()
{
    document.getElementById(divId).style.left = 0;
    if (document.all)
    {
        document.getElementById(divId).style.top = (document.body.scrollTop + document.body.clientHeight - bHeight);
    }
    else
        document.getElementById(divId).style.top = (document.body.clientHeight - bHeight)+'px';

  if( typeof( window.innerWidth ) == 'number') {
    //Non-IE
    
    myHeight = window.innerHeight;
    document.getElementById(divId).style.position='fixed';
    document.getElementById(divId).style.top = (myHeight - bHeight)+'px';
//    if (document.documentElement.scrollWidth>window.innerWidth)
    if (window.scrollMaxX>0)
     document.getElementById(divId).style.top = (myHeight - bHeight-16)+'px';
    
  } 
  else 
  if (document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //alert(document.documentElement.clientHeight);
    myHeight = document.documentElement.clientHeight+document.documentElement.scrollTop;
    document.getElementById(divId).style.top = (myHeight - bHeight)+'px';
  }



    document.getElementById(divId).style.width = document.body.clientWidth;


}

function vAlignment2()
{

setTimeout('vAlignment()',100);

}




function roll()
{
    if (document.all || document.getElementById)
    {
        leftPos = parseInt(document.getElementById(tableId).style.left);
        document.getElementById(tableId).style.left = (leftPos - shift)+'px';
        if (Math.abs(leftPos) >= bWidth)
        {
            document.getElementById(tableId).style.left = (-shift)+'px';
        }
    }
 
}

function showBanner(bBody)
{
    var position;
    if (window.attachEvent)
    {

        window.attachEvent("onscroll", vAlignment);
        window.attachEvent("onresize", vAlignment2);
        position = "absolute";
    }
    else
    {
        window.addEventListener("resize", vAlignment2, 1);
        position = "fixed";
    }
    
    //document.write('');
    document.write('<div id="' + divId + '" onMouseout="shift=1" onMouseover="shift=0" style="visibility:hidden;overflow:hidden;position:' + position + ';left:0px;width:' + document.body.clientWidth + 'px;height:' + bHeight + 'px;z-index:100;">');
    document.write('<table cellspacing=0 cellpadding=0 id="' + tableId + '" style="position:absolute;left:0;top:0;width:' + (bWidth * 4) + 'px"><tr><td>' + bBody + '</td></table></div>');

    setTimeout("start()", 1000);
}