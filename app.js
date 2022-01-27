let timerStarted = false;

function startTimer() {
    if (timerStarted) return;

    let startTime = new Date().getTime();
    let fiveMinutes = 1000 * 60 * 5;
    let endTime = startTime + fiveMinutes;

    setInterval(function() {
        let timeLeft = endTime - new Date().getTime();

        if (timeLeft > 0) {
            let minutes = Math.floor(timeLeft / (1000 * 60));
            let seconds = Math.round((timeLeft / 1000) % 60);
            let text = "0" + minutes + " : " + ("0" + seconds).slice(-2);
            timer.innerHTML = text;
        } else timer.innerHTML = "00 : 00";

    }, 1000);

    timerStarted = true;
}