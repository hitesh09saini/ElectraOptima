var les =  document.getElementById("let")
var txt = 'Welcome to Residential Energy Auditor.';
var speed = 100;
var st = "";
var i =0;


function read() {
    
    if (i < txt.length) {
        document.getElementById('wel').innerHTML += txt.charAt(i);
        i++;
        setTimeout(read, speed);
    }
}

document.addEventListener("DOMContentLoaded", read);


function unitconvert(){
    location.href ="unitConvertor.html";
}

function calci(){
    location.href ="calci.html";
}
