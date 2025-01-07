const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $("#content");
const pronunciation = $("#pronunciation");
const meaning = $("#meaning");
const resetButton = $("#reset");
const count = $("#count");
const dateInput = $("#date");

const leftButton = $("#left-button");
const rightButton = $("#right-button");

let items = [];
let index = 0;

window.onload = () => {
    dateInput.value = dateString(new Date());
    resetData([dateInput.value]);
    resetButton.onclick = () => {
        const date = dateInput.value;
        resetData([date]);
    };
};
