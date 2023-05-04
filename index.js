console.log("object")

function showtime(){ 

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";
if(h==0){
   h=12//12 hour
}
if(h>12){
  h=h-12// 12 hourr format
  session = "PM";
}

// if(h<10){
//   h="0"+h;
// }

// if(m<10){
//   m="0"+m
// }
// if(s<10){
//   s="0"+s

// }

h=(h<10)?"0"+h:h;
m=(h<10)?"0"+m:m;
s=(h<10)?"0"+s:s;


document.getElementById("DigitalClock").innerHTML = h+":" + m +":"+ s + ""+ session;


setTimeout(showtime,1000);

}
showtime();

