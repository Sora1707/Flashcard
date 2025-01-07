async function getData(dateStrings) {
    const data = [];
    for (const dateString of dateStrings) {
        try {
            const response = await fetch(
                `./data/${dateString}.json?nocache=${new Date().getTime()}`
            );
            const result = await response.json();
            data.push(...result);
        } catch (e) {
            // console.log(`[WARNING] There is no file "${dateString}.json"`);
        }
    }
    return data;
}

async function resetData(dateStrings) {
    items = await getData(dateStrings);
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
}
