function showTime(){
    var times = new Date();
    var h = times.getHours(); // 0 - 23
    var m = times.getMinutes(); // 0 - 59
    var s = times.getSeconds(); // 0 - 59
    //var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        //h = h + 12;
        //session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;// + " " + session

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
