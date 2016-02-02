'use strict';

var timeLeft = 25 * 60;//in seconds
var timer = null;

var timeDisplay = document.getElementById('time-display');
var finishSound = new Audio(__dirname + '/sounds/bell.wav');

updateTimerDisplay();

function startTimer(){
    timer = setInterval(function() {
        if(--timeLeft <= 0) {
            clearInterval(timer);
            playFinishSound();
        }
        updateTimerDisplay();
    }, 1000);
}

function resetTimer(){
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    timeDisplay.innerHTML =  ('0' + (Math.floor(timeLeft / 60))).slice(-2)
        + ":"
        + ('0' + (timeLeft % 60)).slice(-2);
}

function playFinishSound(){
    finishSound.currentTime = 0;
    finishSound.play();
}
