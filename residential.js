let i = 0;

function write(id, str) {
    if (i < str.length) {
        document.getElementById(id).innerHTML += str.charAt(i); 
        i++;
        setTimeout(function () {
            write(id, str); 
        },100);
    }else{
        i = 0;
    }

}

// loading time
document.addEventListener("DOMContentLoaded", function() {
    write('wel', 'Welcome to Residential Energy Auditor.');
});



function unitconvert() {
    location.href = "unitConvertor.html";
}

function calci() {
    location.href = "calci.html";
}


function letStart() {

    document.getElementById('Q1').style.display = 'block';
    scrollToBottom();
  
}
  


function scrollToBottom() {
    const container = document.getElementById('demo');

    container.scrollTop = container.scrollHeight;
}


function q2() {
    document.getElementById('Q2').style.display = 'block';
    scrollToBottom();
}
function q3() {
    document.getElementById('Q3').style.display = 'block';
    scrollToBottom();
}
function q4() {
    document.getElementById('Q4').style.display = 'block';
    scrollToBottom();
}
function q5() {
    document.getElementById('Q5').style.display = 'block';
    scrollToBottom();
}
function q6() {
    document.getElementById('Q6').style.display = 'block';
    scrollToBottom();
}
function q7() {
    document.getElementById('Q7').style.display = 'block';
    scrollToBottom();
}
function q8() {
    document.getElementById('Q8').style.display = 'block';
    scrollToBottom();
}
function q9() {
    document.getElementById('Q9').style.display = 'block';
     scrollToBottom();
}


function submit(){
    document.getElementById('upload').style.display ="flex";
    setTimeout(sub,2000);
}
function sub() {
    document.getElementById('cont').style.display = 'none';
    document.getElementById('upload').style.display ="none";
    document.getElementById('gen').style.display = 'flex';
    
    write('report', 'The Auditing process is completed.');
    setTimeout(openFeedback, 5000);
}

function openFeedback(){
    document.getElementById('form').style.display ="flex";
}



function ban(){
    document.getElementById('form').style.display ='none';
}



document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popupContainer = document.getElementById('popup-container');

    openPopupButton.addEventListener('click', function () {
        popupContainer.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });
});


function submitfeedback(){
    document.getElementById('form').style.display ='none';
}

function pdf(){
    location.href = 'report.html';
}

