function calcit ()
{
var varr=[];
var price="0";
var bonus="0";
var step="";
var spanID="";
var str=parseInt(document.forms["calc"].ti.value);
varr[0]=new Array("0","2500","не предусмотрено");
varr[1]=new Array("50000000","3200","800000");
varr[2]=new Array("70000000","4200","1000000");
varr[3]=new Array("90000000","5000","1200000");
varr[4]=new Array("110000000","6000","1400000");
varr[5]=new Array("130000000","7000","1800000");
varr[6]=new Array("150000000","7500","2000000");
varr[7]=new Array("170000000","8500","2000000");
varr[8]=new Array("190000000","9500","2000000");
varr[9]=new Array("210000000","10500","2500000");
varr[10]=new Array("235000000","11500","2500000");
varr[11]=new Array("260000000","12500","3000000");
varr[12]=new Array("290000000","13500","3500000");
varr[13]=new Array("325000000","14850","5500000");
varr[14]=new Array("380000000","16500","5500000");
varr[15]=new Array("435000000","18200","6000000");
varr[16]=new Array("495000000","20000","8500000");
varr[17]=new Array("580000000","22000","9500000");
varr[18]=new Array("675000000","24500","11000000");
varr[19]=new Array("785000000","27000","14000000");
varr[20]=new Array("925000000","30000","15500000");
varr[21]=new Array("1080000000","33000","19500000");
varr[22]=new Array("1275000000","36500","21500000");
varr[23]=new Array("1490000000","40000","26000000");
varr[24]=new Array("1750000000","44000","32000000");
varr[25]=new Array("2070000000","48500","38500000");
varr[26]=new Array("2455000000","53500","17500000");
varr[27]=new Array("2630000000","55000","12000000");
varr[28]=new Array("2750000000","57000","17500000");
varr[29]=new Array("2925000000","59000","7500000");
for (var i=0;i<varr.length;i++){
if (str>=varr[i][0]&&str<varr[i+1][0]){
price=varr[i][1];
bonus=varr[i][2];
break;
}
}
spanID="price";
document.getElementById(spanID).innerHTML=price;
}

function calcit1 ()
{
var varr=[];
var price="0";
var bonus="0";
var step="";
var spanID="";
var diff=0;
var str=parseInt(document.forms["calc"].ti.value);
varr[0]=new Array("0","50","не предусмотрено");
varr[1]=new Array("300000","50","30000");
varr[2]=new Array("600000","75","30000");
varr[3]=new Array("900000","100","70000");
varr[4]=new Array("1600000","125","80000");
varr[5]=new Array("2400000","150","60000");
varr[6]=new Array("3000000","175","90000");
varr[7]=new Array("3900000","200","120000");
varr[8]=new Array("5100000","225","120000");
varr[9]=new Array("6300000","250","120000");
varr[10]=new Array("7500000","275","150000");
varr[11]=new Array("9000000","300","300000");
varr[12]=new Array("12000000","350","300000");
varr[13]=new Array("15000000","400","500000");
varr[14]=new Array("20000000","450","460000");
varr[15]=new Array("24600000","500","540000");
varr[16]=new Array("30000000","550","600000");
varr[17]=new Array("36000000","600","560000");
varr[18]=new Array("41600000","650","670000");
varr[19]=new Array("48300000","700","700000");
varr[20]=new Array("55300000","750","760000");
varr[21]=new Array("62900000","800","610000");
var maxa=varr[21][0];
if (str>maxa)
{
//diff=str-maxa;
price="Свяжитесь с нашим коммерческим отделом";
}
else {
for (var i=0;i<varr.length;i++){
if (str>=varr[i][0]&&str<varr[i+1][0]){
price=varr[i][1]*30;
bonus=varr[i][2];
break;
}
}
}
spanID="price";
document.getElementById(spanID).innerHTML=price;
}