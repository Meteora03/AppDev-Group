let timer;
let timeLeft;
let cycleCount = 0;
let isBreak = false;

const timerDisplay = document.getElementById("timer");

const MODES = {
    pomodoro: 1500, // 25 mins
    long: 900,      // 15 mins
    short: 8      // 8 seconds (for testing)
};

const BREAK_TIME = 300; // 5:00 break
const MAX_CYCLES = 4;   // 4 cycles per mode

let activeMode = "pomodoro"; // default mode

// Change mode buttons
document.querySelectorAll(".mode_btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".mode_btn.active").classList.remove("active");
        btn.classList.add("active");

        activeMode = btn.dataset.mode;
        resetTimer();
    });
});

// Start
document.getElementById("startBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(countdown, 1000);
});

// Pause
document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(timer);
});

// Restart
document.getElementById("restartBtn").addEventListener("click", () => {
    resetTimer();
});

// Reset timer to initial state
function resetTimer() {
    clearInterval(timer);
    timeLeft = MODES[activeMode];
    isBreak = false;
    cycleCount = 0;
    updateTimer();
}

// Countdown logic
function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timer);

        if (!isBreak) {
            // Finished work session → start break
            timeLeft = BREAK_TIME;
            isBreak = true;
            updateTimer();
            timer = setInterval(countdown, 1000);
        } else {
            // Finished break
            cycleCount++;
            if (cycleCount < MAX_CYCLES) {
                // Start next work session
                timeLeft = MODES[activeMode];
                isBreak = false;
                updateTimer();
                timer = setInterval(countdown, 1000);
            } else {
                // Finished 4 cycles → stop
                alert("Pomodoro complete!");
            }
        }
        return;
    }

    timeLeft--;
    updateTimer();
}

// Update display
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
