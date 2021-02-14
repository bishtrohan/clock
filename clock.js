let watch = document.querySelector('#timediv');


function clock() {
    let showtime = new Date().toLocaleTimeString(); //shows only time from new date() in string
    watch.innerText = showtime;
}

// To show time every second
setInterval(clock,1000); 