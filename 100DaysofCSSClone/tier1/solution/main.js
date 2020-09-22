// @ts-nocheck
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  
function initializeClock(id, endtime) {
    const daysSpan = document.getElementById(id);

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = `${("0" + t.hours).slice(-2)}:${("0" + t.minutes).slice(-2)}:${("0" + t.seconds).slice(-2)}`;

        if (t.total <= 0) {
        clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 500);
}

const timeInMinutes = 25;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInMinutes*60*1000);
initializeClock("timer", deadline);