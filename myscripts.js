var eventName, eventDate;
var eventMonth, eventDay
function getInput(){
eventMonth = 06;
eventDay = 05;
eventDate = new Date(2024+"-"+eventMonth+"-"+eventDay);
displayCountdown();

displayCountdown();
setInterval(displayCountdown,1000);
}



function displayCountdown(){
var currentDate = new Date();
var timeDiff = eventDate.getTime()-currentDate.getTime();
var sec = timeDiff/1000; 
var min = sec/60; 
var hour = min/60; 
var day = hour/24; 
var daysLeft = Math.floor(day); 
var hoursLeft = Math.floor(hour % 24); 
var minLeft = Math.floor(min % 60); 
var secLeft = Math.floor(sec % 60); 
var myBox = document.getElementById("my_box");

if(daysLeft<0){

myBox.innerHTML = "Sadly Your Birthday has already Passed this year" 
}

else{
myBox.innerHTML = "<h3>Countdown to My Birthday<h3>"+ daysLeft + " &nbsp  days , &nbsp" +hoursLeft+ " &nbsp hours, &nbsp" +minLeft+ "&nbsp  minutes, &nbsp"
+secLeft+"&nbsp Seconds"; 
}
}