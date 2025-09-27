setInterval(() => {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);

    const offset = 5.5 * 60 * 60 * 1000; 
    const gmtPlus530Time = new Date(utcTime + offset);
    let hours = gmtPlus530Time.getHours();
    let minutes = gmtPlus530Time.getMinutes();
    let seconds = gmtPlus530Time.getSeconds();

    function addLeadingZero(i) {
        return i < 10 ? "0" + i : i;
    }

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    let currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = currentTime;
}, 1000);