function shuffleArray(arr) {
    new_arr = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [new_arr[i], new_arr[j]] = [new_arr[j], new_arr[i]];
    }
    return new_arr;
}

function getDateString(date) {
    return date.toISOString().split("T")[0];
}

function dayBeforeAfter(date, days) {
    newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

function dateGenerate(startDate, days) {
    const dates = [];

    const sign = days > 0 ? 1 : -1;
    days = days * sign;

    for (let i = 0; i < days; i++) {
        dates.push(dayBeforeAfter(startDate, i * sign));
    }
    return dates;
}
