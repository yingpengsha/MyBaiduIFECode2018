var yearSelect=document.getElementById('year-select');
var monthSelect=document.getElementById('month-select');
var daySelect=document.getElementById('day-select');
var hourSelect=document.getElementById('hour-select');
var minuteSelect=document.getElementById('minute-select');
var secondSelect=document.getElementById('second-select');
var result=document.getElementById('result-wrapper');
function yearList(){
	for(i=2000;i<=2024;i++){
		var yearChild=document.createElement('option');
		yearChild.value=i;
		yearChild.innerHTML=i;
		yearSelect.appendChild(yearChild);
	}
}
function monthList(){
	for(i=1;i<=12;i++){
		var monthChild=document.createElement('option');
		monthChild.value=i;
		monthChild.innerHTML=i;
		monthSelect.appendChild(monthChild);
	}
}
function dayList(){
	var dayArray=[31,28,31,30,31,30,31,31,30,31,30,31];
	var dayNumber=dayArray[Number(monthSelect.value)-1];
	if (Number(monthSelect.value)==2 && Number(yearSelect.value)%4==0 && Number(yearSelect.value)%100!=0) {
		dayNumber=29;
	}
	for(i=1;i<=dayNumber;i++){
		var dayChild=document.createElement('option');
		dayChild.value=i;
		dayChild.innerHTML=i;
		daySelect.appendChild(dayChild);
	}
}
function hourList(){
	for(i=0;i<=12;i++){
		var hourChild=document.createElement('option');
		hourChild.value=i;
		hourChild.innerHTML=i;
		hourSelect.appendChild(hourChild);
	}
}
function minuteList(){
	for(i=0;i<=60;i++){
		var minuteChild=document.createElement('option');
		minuteChild.value=i;
		minuteChild.innerHTML=i;
		minuteSelect.appendChild(minuteChild);
	}
}
function secondList(){
	for(i=0;i<=60;i++){
		var secondChild=document.createElement('option');
		secondChild.value=i;
		secondChild.innerHTML=i;
		secondSelect.appendChild(secondChild);
	}
}
yearList();
monthList();
dayList();
hourList();
minuteList();
secondList();
daySelect.onfocus=dayList;
function main(){
	var now=new Date();
	var year=Number(yearSelect.value);
	var month=Number(monthSelect.value);
	var day=Number(daySelect.value);
	var hour=Number(hourSelect.value);
	var minute=Number(minuteSelect.value);
	var second=Number(secondSelect.value);
	var date=setDate(year,month,day,hour,minute,second);
	var dateText=setDateText(date);
	var compareText=date>now?'还有 ':'已经过去 ';
	var betweenTimeText=getBetweenTimeText(Math.abs(now.getTime()-date.getTime()));
	result.innerHTML=dateText+compareText+betweenTimeText;
}
function setDate(year,month,day,hour,minute,second){
	var date=new Date();
	date.setFullYear(year);
	date.setMonth(month-1);
	date.setDate(day);
	date.setHours(hour);
	date.setMinutes(minute);
	date.setSeconds(second);
	return date;
}
function setDateText(date){
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var week=formatWeek(date);
	var hour=format(date.getHours());
	var minute=format(date.getMinutes());
	var second=format(date.getSeconds());
	return '现在距离 '+year+'年'+month+'月'+day+'日'+week+' '+hour+':'+minute+':'+second+' ';
}
function format(number){
	if (Number(number)<10) {
		return '0'+ number;
	}
	return number;
}
function formatWeek(date){
	var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	return week[date.getDay()];
}
function getBetweenTimeText(time){
	var day=Math.floor(time/86400000);
	time%=86400000;
	var hour=Math.floor(time/3600000);
	time%=3600000;
	var minute=Math.floor(time/60000);
	time%=60000;
	var second=Math.floor(time/1000);
	return day+' 天 '+hour+' 小时 '+minute+' 分钟 '+second+' 秒';
}
main();
yearSelect.onchange=main;
monthSelect.onchange=main;
daySelect.onchange=main;
hourSelect.onchange=main;
minuteSelect.onchange=main;
secondSelect.onchange=main;
var time=setInterval('main()',1000);