const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $("#content");
const pronunciation = $("#pronunciation");
const meaning = $("#meaning");

const shuffleButton = $("#shuffle");

const count = $("#count");
const wordTotal = $("#total-words");

const leftButton = $("#left-button");
const rightButton = $("#right-button");

const wordLimitInput = $("#word-limit");
const dateInput = $("#date");

const MIN_REVIEW_WORDS = 10;
const MAX_REVIEW_WORDS = 30;

let config = {};
let items = [];
let index = 0;

function shuffle() {
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
}

async function resetItems() {
    const chosen = $(".chosen");
    const value = parseInt(chosen.dataset.value);
    const date = value == 1 ? new Date(dateInput.value) : new Date();
    items = await getDataInDateRange(date, -value);
    shuffle();
}

function loadConfig() {
    const config = localStorage.getItem("config");
    return config
        ? JSON.parse(config)
        : {
              wordLimit: MIN_REVIEW_WORDS,
          };
}

function saveConfig(config) {
    localStorage.setItem("config", JSON.stringify(config));
}

window.onload = async () => {
    config = loadConfig();

    wordLimitInput.setAttribute("min", MIN_REVIEW_WORDS);
    wordLimitInput.setAttribute("max", MAX_REVIEW_WORDS);
    wordLimitInput.value = config.wordLimit;

    const today = new Date();
    dateInput.value = dateString(today);

    items = await getData([dateInput.value]);
    shuffle();

    shuffleButton.onclick = shuffle;
};
