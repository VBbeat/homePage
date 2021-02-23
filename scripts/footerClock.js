var footerClock = function () {
    var dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var display = document.getElementById('footerClock');
    var dateStr = '';


    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    dateStr = hour + ':' + minutes + "<br>";
    dateStr += year + '/' + month + '/' + day;


    if (display) {
        display.innerHTML = dateStr;
    }


    setTimeout(footerClock, 1000)
};

footerClock();
