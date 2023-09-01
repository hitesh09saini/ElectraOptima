var audio = document.getElementById('audio');

document.addEventListener("DOMContentLoaded", function() {
    // audio.volume = 0.3;
    audio.play();
    // console.log(audio);
});
function start(){

        audio.pause();
        document.getElementById('cont1').style.display= 'none';
        // document.body.style.background = 'red';
        document.getElementById('cont2').style.display= 'flex';
}

function comm(){
    window.location ='error.html'
    alert("I regret to inform you that it's not presently accessible.");
}

function indu(){
    window.location ='error.html'
    alert("I regret to inform you that it's not presently accessible.");
}

function home(){
    location.href = 'Residential.html';
}