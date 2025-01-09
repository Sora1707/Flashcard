function chosen(e) {
    $(".chosen").classList.remove("chosen");
    e.target.classList.add("chosen");
}

$$(".nav-button").forEach(
    button =>
        (button.onclick = async e => {
            chosen(e);
            const value = parseInt(e.target.dataset.value);
            items = await getDataInDateRange(new Date(), -value);
            shuffle();
        })
);

dateInput.onclick = async e => {
    chosen(e);
    const dateString = e.target.value;
    items = await getData([dateString]);
    shuffle();
};

dateInput.onchange = async e => {
    chosen(e);
    const dateString = e.target.value;
    items = await getData([dateString]);
    shuffle();
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
