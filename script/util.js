function shuffleArray(arr) {
    new_arr = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [new_arr[i], new_arr[j]] = [new_arr[j], new_arr[i]];
    }
    return new_arr;
}

function dateString(date) {
    return date.toISOString().split("T")[0];
}

function dateGenerate(startDate, days) {
    const dates = [];

    const sign = days > 0 ? 1 : -1;
    days = days * sign;

    for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i * sign);
        dates.push(date);
    }
    return dates;
}
