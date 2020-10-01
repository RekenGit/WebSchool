function timer(){
	var today = new Date();
				
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var sec = today.getSeconds();
				
	if(hour<=9)hour = "0"+hour;
	if(minute<=9)minute = "0"+minute;
	if(sec<=9)sec = "0"+sec;
	if(day<=9)day = "0"+day;
	if(month<=9)month = "0"+month;
	
	document.getElementById("clock").innerHTML =
	hour+":"+minute+'<div style="display:inline-block; margin:0; font-size:22px;">'+":"+sec+'</div><br/>'+day+"."+month+"."+year;
				
	setTimeout("timer()",100);
}