'use strict';

var timeLeft = 25 * 60;//in seconds
var timer = null;

var timeDisplay = document.getElementById('time-display');
updateTimerDisplay();

function updateTimerDisplay() {
    timeDisplay.innerHTML =  (Math.floor(timeLeft / 60)) + ":" + (timeLeft % 60);
}

function startTimer(){
    timer = setInterval(function() {
        if(--timeLeft <= 0) {
            clearInterval(timer);
        }
        updateTimerDisplay();
    }, 1000);
}

function resetTimer(){
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
}
