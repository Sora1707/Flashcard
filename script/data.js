async function getData(dates) {
    try {
        const data = [];
        for (const date of dates) {
            const response = await fetch(
                `./data/${date}.json?nocache=${new Date().getTime()}`
            );
            const result = await response.json();
            data.push(...result);
        }
        return data;
    } catch (e) {
        return [];
    }
}

async function resetData(dates) {
    items = await getData(dates);
    console.log(items);
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
}
