
function ha(){
var i = document.getElementById("in").value
var xhr= new XMLHttpRequest();
xhr.open("GET","http://192.168.29.108/cgi-bin/back.py?x="+i, true);
xhr.send();

xhr.onload = function(){
var output  = xhr.responseText;
document.getElementById("p1").innerHTML=output;
}
}


