var footerClock = function () {
    var dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth();
    var day = dateObj.getDate();
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var displayElement = document.getElementById('footerClock');
    var timeStr = '';


    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }


    timeStr = year + '/' + month + '/' + day + ' ';
    timeStr += hour + ':' + minutes;

    if (displayElement) {
        displayElement.innerHTML = timeStr;
    }

    setTimeout(footerClock, 1000)
};

footerClock();
