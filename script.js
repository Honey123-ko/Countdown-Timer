const daysEl = document.getElementById('days');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const hoursEl = document.getElementById('hours');

const newYears = '1 Jan 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / (3600 * 24) );
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    console.log(seconds, minutes, hours, days);
   
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);







