const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('min')
const secondsEl = document.getElementById('seconds')



const birthDay = '27 Jun 2022'

function countdown() {
    const birthDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSeconds = (birthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60 % 24) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    console.log(days, hours, minutes);

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
}


countdown();

setInterval(countdown, 1000)