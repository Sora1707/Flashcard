async function getData(dateStrings) {
    const data = [];
    for (const dateString of dateStrings) {
        try {
            const response = await fetch(
                `./data/${dateString}.yaml?nocache=${new Date().getTime()}`
            );
            if (!response.ok) {
                throw new Error(`File "${dateString}.yaml not found"`);
            }
            const text = await response.text();
            const result = jsyaml.load(text);
            data.push(...result);
        } catch (e) {
            console.log(e);
        }
    }
    return data;
}

async function getDataInDateRange(startDate, value) {
    const dates = dateGenerate(new Date(), value);
    const dateStrings = dates.map(date => dateString(date));
    items = await getData(dateStrings);
    return items;
}
