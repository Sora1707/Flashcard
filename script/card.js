function contentModify(content) {
    const highlights = [];
    for (let i = 0; i < content.length; ++i) {
        if (content[i] === "[") highlights.push(i);
        else if (content[i] === "]") highlights.push(i);
    }
    if (highlights.length === 0)
        return `<span class="highlight">${content}</span>`;
    let result = "";
    let begin = 0;
    for (let i = 0; i < highlights.length; i += 2) {
        result += content.slice(begin, highlights[i]);
        result +=
            "<span class='highlight'>" +
            content.slice(highlights[i] + 1, highlights[i + 1]) +
            "</span>";
        begin = highlights[i + 1] + 1;
    }
    result += content.slice(begin);
    return result;
}

function changeContent(items, index) {
    const wordLimit = parseInt(wordLimitInput.value);
    const wordMax = Math.min(wordLimit, items.length);

    if (items.length > 0) {
        const item = items[index];
        content.innerHTML = contentModify(item.content);
        pronunciation.textContent = item.pronunciation;
        meaning.textContent = item.meaning;
        count.textContent = `${index + 1}/${wordMax}`;
        wordTotal.textContent = `${items.length} words`;
    } else {
        content.innerHTML = "何もない";
        pronunciation.textContent = "";
        meaning.textContent = "";
        count.textContent = "0/0";
        wordTotal.textContent = `0 word`;
    }
}

function moveForward() {
    if (!content.classList.contains("invisible")) {
        content.classList.toggle("invisible");
    }
    if (!pronunciation.classList.contains("invisible")) {
        pronunciation.classList.toggle("invisible");
    }
    const wordLimit = parseInt(wordLimitInput.value);
    const wordMax = Math.min(wordLimit, items.length);
    index -= 1;
    if (index < 0) index = wordMax - 1;
    changeContent(items, index);
}

function moveBackward() {
    if (!content.classList.contains("invisible")) {
        content.classList.toggle("invisible");
    }
    if (!pronunciation.classList.contains("invisible")) {
        pronunciation.classList.toggle("invisible");
    }

    const wordLimit = parseInt(wordLimitInput.value);
    const wordMax = Math.min(wordLimit, items.length);
    index += 1;
    if (index >= wordMax) index = 0;
    changeContent(items, index);
}

window.onkeydown = e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const wordLimit = parseInt(wordLimitInput.value);
    const wordMax = Math.min(wordLimit, items.length);
    if (e.key === "ArrowLeft") moveBackward();
    else moveForward();
};

leftButton.onclick = moveBackward;

rightButton.onclick = moveForward;

revealButton.onclick = e => {
    content.classList.toggle("invisible");
    pronunciation.classList.toggle("invisible");
};
