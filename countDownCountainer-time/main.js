const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondEl = document.getElementById('seconds');

const newYear = '21 mar 2021';

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = Math.floor(newYearsDate - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const mins = Math.floor(totalSeconds / 3600) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    secondEl.innerHTML = formatTime(seconds);
    minsEl.innerHTML = formatTime(mins);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = days;


}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000)