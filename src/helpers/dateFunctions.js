
function formatDate(dateObj) {
    let day = dateObj.getDate();
    if (day.toString().length === 1) day = '0' + day.toString();
    let month = dateObj.getMonth() + 1;
    if (month.toString().length === 1) month = '0' + month.toString();
    const year = dateObj.getFullYear();
    const dateString = `${day}.${month}.${year}`;
    return dateString;
};

function buildDatesArray() {
    const checkInArray = checkIn.split(['.']);
    const checkOutArray = checkOut.split(['.']);
    const checkInDate = new Date(checkInArray[2], parseInt(checkInArray[1]) - 1, checkInArray[0], 0, 0, 0, 0);
    const checkOutDate = new Date(checkOutArray[2], parseInt(checkOutArray[1]) - 1, checkOutArray[0], 0, 0, 0, 0);
    const duration = Math.floor((checkOutDate - checkInDate) / 1000 / 60 / 60 / 24);

    let dates = [];

    for (let index = 0; index < duration; index++) {
        let date = new Date(checkInDate);
        date.setDate(date.getDate() + index);
        const formatted = formatDate(date);
        dates.push(formatted)
    }

    return dates;
}


function countDefaultCheckIn() {
    const date = new Date();
    return formatDate(date);
};

function countDefaultCheckOut() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return formatDate(date);
};

function formatDate(dateObj) {
    let day = dateObj.getDate();
    if (day.toString().length === 1) day = '0' + day.toString();
    let month = dateObj.getMonth() + 1;
    if (month.toString().length === 1) month = '0' + month.toString();
    const year = dateObj.getFullYear();
    const dateString = `${day}.${month}.${year}`;
    return dateString;
};

const defaultCheckIn = countDefaultCheckIn();
const defaultCheckOut = countDefaultCheckOut();


function formatDate(date) {
    let day = date.getDate();
    if (day.toString().length === 1) day = '0' + day.toString();
    let month = date.getMonth() + 1;
    if (month.toString().length === 1) month = '0' + month.toString();
    const year = date.getFullYear();
    const dateString = `${day}.${month}.${year}`;
    return dateString;
}

function formatTime(date) {
    let hours = date.getHours();
    if (hours.toString().length === 1) hours = '0' + hours.toString();
    let minutes = date.getMinutes();
    if (minutes.toString().length === 1) minutes = '0' + minutes.toString();
    const timeString = `${hours}:${minutes}`;
    return timeString;
}

function formatString(start, end) {
    let startFormatted = formatTime(start);
    let endFormatted = formatTime(end);
    let nextDay = '';
    if (end.getDate() > start.getDate()) nextDay = ' (+1)'
    const resultString = `${startFormatted} - ${endFormatted}${nextDay}`
    return resultString;
};

function countDuration(start, end) {
    let hours = parseInt((end - start) / 1000 / 60 / 60);
    let minutes = parseInt((end - start) / 1000 / 60 % 60);
    const duration = `${hours}h ${minutes}m`
    return duration;
};

export {
    formatDate,
    buildDatesArray,
    countDefaultCheckIn,
    countDefaultCheckOut,
}