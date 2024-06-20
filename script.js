const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener('click', () => {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay(elapsedTime);
  }, 10); // Update every 10 milliseconds
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  updateDisplay(elapsedTime);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function updateDisplay(time) {
  const milliseconds = (time % 1000).toString().padStart(3, '0');
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
  const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
