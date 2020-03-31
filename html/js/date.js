function showDate() {
    var date = new Date();
    var j = date.getFullYear();
    var mo = date.getMonth();
    var d = date.getDate();

    mo = mo + 1;
    var dateu = d + "." + mo + "." + j;
    document.getElementById("MyDateDisplay").innerText = dateu;
    document.getElementById("MyDateDisplay").textContent = dateu;

}

showDate();
