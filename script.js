const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
let i = 2023;
let j = i;
const newBDay = "23 Mar" + i;

function countdown() {
  const newBDate = new Date(newBDay);
  const currentDate = new Date();

  const totalSeconds = (newBDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  console.log(days, hours, minutes, seconds);

  if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
    j++;
    i = j - 1;
    newBDay = newBDay.replace(/i/g, j);
  }
}

countdown();

setInterval(countdown, 1000);
