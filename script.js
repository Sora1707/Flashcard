function shuffleArray(arr) {
    new_arr = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [new_arr[i], new_arr[j]] = [new_arr[j], new_arr[i]];
    }
    return new_arr;
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $("#content");
const pronunciation = $("#pronunciation");
const meaning = $("#meaning");
const resetButton = $("#reset");
const count = $("#count");
const dateInput = $("#date");

let items = [];
let index = 0;

// const GITHUB_RESPO_NAME = "Flashcard";
// const GITHUB_RESPO_NAME = "";

async function getData() {
    try {
        const time = dateInput.value;
        const response = await fetch(
            `./data/${time}.json?nocache=${new Date().getTime()}`
        );
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (e) {
        return [];
    }
}

function contentModify(content) {
    let begin = -1,
        end = -1;
    for (let i = 0; i < content.length; ++i) {
        if (content[i] === "[") begin = i;
        else if (content[i] === "]") end = i;
    }
    if (begin === -1 || end === -1)
        return `<span class="highlight">${content}</span>`;
    content =
        content.slice(0, begin) +
        "<span class='highlight'>" +
        content.slice(begin + 1, end) +
        "</span>" +
        content.slice(end + 1);
    return content;
}

function changeContent(items, index) {
    if (items.length > 0) {
        const item = items[index];
        content.innerHTML = contentModify(item.content);
        pronunciation.textContent = item.pronunciation;
        meaning.textContent = item.meaning;
        count.textContent = `${index + 1}/${items.length}`;
    } else {
        content.innerHTML = "何もない";
        pronunciation.textContent = "";
        meaning.textContent = "";
        count.textContent = "0/0";
    }
}

async function resetData() {
    items = await getData();
    console.log(items);
    items = shuffleArray(items);
    index = 0;
    changeContent(items, index);
}

window.onload = () => {
    const date = new Date();
    console.log(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    dateInput.value = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
    }`;
    resetData();
    resetButton.onclick = resetData;
};

window.onkeydown = e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    index += e.key === "ArrowRight" ? 1 : -1;
    if (index < 0) index = items.length - 1;
    if (index > items.length - 1) index = 0;
    changeContent(items, index);
};

dateInput.onchange = resetData;
