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
            resetItems();
        })
);

dateInput.onclick = chosen;

dateInput.onchange = async e => {
    chosen(e);
    const dateString = e.target.value;
    items = await getData([dateString]);
    resetItems();
};

function validateNumberInput(e) {
    let value = e.target.value;
    if (value < MIN_REVIEW_WORDS) value = MIN_REVIEW_WORDS;
    else if (value > MAX_REVIEW_WORDS) value = 30;
    e.target.value = value;

    config.wordLimit = value;
    saveConfig(config);
}

$(".nav-number-input").onkeydown = e => {
    if (e.key === "Enter") validateNumberInput(e);
};

$(".nav-number-input").onblur = e => {
    validateNumberInput(e);
};
