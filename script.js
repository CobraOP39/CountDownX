let countdown;
let timerDisplay = document.getElementById("timerDisplay");
let timeInput = document.getElementById("timeInput");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

function startTimer() {
    let time = parseInt(timeInput.value);

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    // Stop any existing countdown
    clearInterval(countdown);

    // Start a new countdown
    countdown = setInterval(function() {
        time--;

        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        // Format time to always show two digits
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = "00:00:00";
    timeInput.value = "";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
