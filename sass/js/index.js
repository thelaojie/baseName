 var hourEL=document.getElementsByClassName("s")[0];
 var minuteEl=document.getElementsByClassName("f")[0];
 var secondEl=document.getElementsByClassName("m")[0];
 
function time(){
	var d=new Date();
	var s=d.getHours() * 30;
	var f=d.getMinutes() * 6;
	var m=d.getSeconds() *6;
	hourEL.style.transform='rotate('+s+'deg)';
	minuteEl.style.transform='rotate('+f+'deg)';
	secondEl.style.transform='rotate('+m+'deg)';
}
time();
setInterval(time,1000);
