const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $("#content");
const pronunciation = $("#pronunciation");
const meaning = $("#meaning");
const resetButton = $("#reset");
const count = $("#count");
const dateInput = $("#date");
const wordLimitInput = $("#word-limit");

const leftButton = $("#left-button");
const rightButton = $("#right-button");

const MIN_REVIEW_WORDS = 10;
const MAX_REVIEW_WORDS = 30;

let items = [];
let index = 0;

async function resetItems() {
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
}

window.onload = async () => {
    wordLimitInput.setAttribute("min", MIN_REVIEW_WORDS);
    wordLimitInput.setAttribute("max", MAX_REVIEW_WORDS);
    wordLimitInput.value = MIN_REVIEW_WORDS;

    const today = new Date();
    dateInput.value = dateString(today);

    items = await getData([dateInput.value]);
    resetItems();

    resetButton.onclick = () => {
        const wordLimit = parseInt(wordLimitInput.value);
        const wordCount = Math.min(wordLimit, items.length);
        resetItems();
    };
};
