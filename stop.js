let startTime, elapsedTime = 0;
let timerInterval;

function formatTime(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);
    let ms = time % 1000;

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    ms = ms < 100 ? (ms < 10 ? '00' + ms : '0' + ms) : ms;

    return `${hrs}:${mins}:${secs}.${ms}`;
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('time').innerText = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', function() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('time').innerText = '00:00:00.000';
});