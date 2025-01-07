const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $("#content");
const pronunciation = $("#pronunciation");
const meaning = $("#meaning");

const resetButton = $("#reset");

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

async function resetItems() {
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
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
    resetItems();
    changeContent(items, index);

    resetButton.onclick = resetItems;
};
