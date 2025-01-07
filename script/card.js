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

window.onkeydown = e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    index += e.key === "ArrowRight" ? 1 : -1;
    if (index < 0) index = items.length - 1;
    if (index > items.length - 1) index = 0;
    changeContent(items, index);
};

leftButton.onclick = e => {
    const wordLimit = parseInt(wordLimitInput.value);
    const wordMax = Math.min(wordLimit, items.length);
    index -= 1;
    if (index < 0) index = wordMax - 1;
    changeContent(items, index);
};

rightButton.onclick = e => {
    const wordLimit = parseInt(wordLimitInput.value);
    const wordMax = Math.min(wordLimit, items.length);
    index += 1;
    if (index >= wordMax) index = 0;
    changeContent(items, index);
};
