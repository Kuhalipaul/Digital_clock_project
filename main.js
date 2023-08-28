const time = document.getElementById('time');
const timeFormat = document.getElementById('timeFormat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let milisecs = date.getMilliseconds();

    hr = hr < 10 ? `0${hr}` : hr;//jodi 10er theke number kom thake tahole samne ekta 01 or 05 erkom kore dekhabe
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    milisecs = milisecs < 10 ? `0${milisecs}` : milisecs;

    time.innerHTML = `${hr} : ${min} : ${sec} : ${milisecs}`;
    timeFormat.innerHTML = hr > 12 ? "PM" : "AM";

    //console.log("hours"+":"+hr+" "+"mins"+":"+min+" "+"sec"+":"+sec+" "+"milisecs"+":"+milisecs);

}