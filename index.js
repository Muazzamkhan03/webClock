let dateTime;
let time;
let date;

setInterval(() => {
    dateTime = new Date();
    time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + String(dateTime.getSeconds()).padStart(2,'0');
    date = dateTime.toLocaleDateString();
    document.querySelector("#time").innerHTML = time;
    document.querySelector("#date").innerHTML = date;
}, 1000);