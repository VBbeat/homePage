var footerClock = function () {
    var dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var display = document.getElementById('footerClock');
    var dateStr = '';

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    dateStr = hour + ':' + minutes + '\n';
    dateStr += year + '/' + month + '/' + day;


    if (display) {
        display.innerHTML = dateStr;
    }


    setTimeout(footerClock, 1000)
};

footerClock();
