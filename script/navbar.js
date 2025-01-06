function chosen(e) {
    $(".chosen").classList.remove("chosen");
    e.target.classList.add("chosen");
}

$$(".nav-button").forEach(button => (button.onclick = chosen));
$(".nav-date-input").onchange = chosen;
