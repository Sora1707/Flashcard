function chosen(e) {
    $(".chosen").classList.remove("chosen");
    e.target.classList.add("chosen");
}

$$(".nav-button").forEach(
    button =>
        (button.onclick = async e => {
            chosen(e);
            const value = parseInt(e.target.dataset.value);
            const dates = dateGenerate(new Date(), -value);
            const dateStrings = dates.map(date => dateString(date));
            items = await getData(dateStrings);
            items = shuffleArray(items);
            index = 0;
            changeContent(items, index);
        })
);

dateInput.onclick = chosen;

dateInput.onchange = async e => {
    chosen(e);
    const dateString = e.target.value;
    items = await getData([dateString]);
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
};
