const hourel = document.getElementById("hour");
const minel = document.getElementById("minutes");
const secel = document.getElementById("seconds");
const ampm1 = document.getElementById("ampm");
const date1 = document.getElementById("date");
const month1 = document.getElementById("month");
const day1 = document.getElementById("day");
const year1 = document.getElementById("year");
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let dt = new Date().getDate();
    let mn = new Date().getMonth();
    let yr = new Date().getFullYear();
    let dy = new Date().getDay();
    let ampm = "AM";

    if (h > 12) {
        // h = h-12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    if (h < 24 && h >= 19) {
        var greeting = "Good Night, It's " + (h - 12) + ":" + m + " " + ampm;
    }
    if (h < 4) {
        var greeting = "Good Night, It's " + h + ":" + m + " " + ampm;
    }
    if (h >= 4 && h < 12) {
        var greeting = "Good Morning, It's " + h + ":" + m + " " + ampm;
    }
    if (h >= 12 && h < 15) {
        var greeting = "Good Afternoon, It's " + (h - 12) + ":" + m + " " + ampm;
    }
    if (h >= 15 && h < 19) {
        var greeting = "Good Evening, It's " + (h - 12) + ":" + m + " " + ampm;
    }
    switch (dy) {
        case 0:
            dy = "Sunday";
            break;
        case 1:
            dy = "Monday";
            break;
        case 2:
            dy = "Tuesday"
            break;
        case 3:
            dy = "Wednesday"
            break;
        case 4:
            dy = "Thursday"
            break;
        case 5:
            dy = "Friday"
            break;
        case 6:
            dy = "Saturday"
            break;

    }
    switch (mn) {
        case 0:
            mn = "January";
            break;
        case 1:
            mn = "February";
            break;
        case 2:
            mn = "March";
            break;
        case 3:
            mn = "April";
            break;
        case 4:
            mn = "May";
            break;
        case 5:
            mn = "June";
            break;
        case 6:
            mn = "July";
            break;
        case 7:
            mn = "August";
            break;
        case 8:
            mn = "September";
            break;
        case 9:
            mn = "October";
            break;
        case 10:
            mn = "November";
            break;
        case 11:
            mn = "december";
            break;
    }
    dt = dt < 10 ? "0" + dt : dt;
    document.getElementById("greeting").innerHTML = greeting;
    hourel.innerText = h;
    minel.innerText = m;
    secel.innerText = s;
    ampm1.innerText = ampm;
    date1.innerText = dt;
    month1.innerText = mn;
    year1.innerText = yr;
    day1.innerText = dy;
}
setInterval(updateClock, 1000);
updateClock();
