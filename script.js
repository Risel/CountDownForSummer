const daysLeft = document.getElementById("days");
const hoursLeft = document.getElementById("hours");
const minutesLeft = document.getElementById("minutes");
const secondsLeft = document.getElementById("seconds");

const summer = '1 June 2022'

function countDown(){
    const summerDate = new Date(summer);
    const currentDate = new Date();
    
    const totalSeconds = (summerDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    
    const hours = Math.floor(totalSeconds/ 3600) %24;

    const minutes = Math.floor(totalSeconds/60)%60;
    
    const seconds = Math.floor(totalSeconds)%60;

    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = formatTime(hours);
    minutesLeft.innerHTML = formatTime(minutes);
    secondsLeft.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countDown();
setInterval(countDown,1000);