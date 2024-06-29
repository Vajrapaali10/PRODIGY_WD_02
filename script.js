let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const display = document.querySelector(".display");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");
const lapsList = document.querySelector(".laps");

function formatTime(ms) {
  const date = new Date(ms);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startTimer() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  lapsList.innerHTML = "";
}

function lapTimer() {
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTimer);
