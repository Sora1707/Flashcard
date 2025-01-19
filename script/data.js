/***
 * Get data from `startDate` backwards by `days`
 */
async function getData(startDate, days) {
    let currentDate = new Date(startDate);
    let count = 0;
    const data = [];
    while (count < days && currentDate >= START_DATE) {
        const dateString = getDateString(currentDate);
        try {
            const response = await fetch(
                `./data/${dateString}.yaml?nocache=${new Date().getTime()}`
            );
            if (!response.ok) {
                throw new Error(`File "${dateString}.yaml not found"`);
            }
            const text = await response.text();
            const result = jsyaml.load(text);
            count += 1;
            data.push(...result);
        } catch (e) {
            // console.log(e);
        }
        currentDate = dayBeforeAfter(currentDate, -1);
        if (days == 1) break; // to display whether that day was recorded
    }
    return data;
}
