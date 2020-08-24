'use strict';

function resizePage(event) {
    let about = document.getElementById("about_us");
    let text = document.getElementById("text");

    let x = 123.0 / 1080;

    about.style.height = text.offsetHeight / (1 - x) + "px";
    text.style.top = x * text.offsetHeight + "px";
}

window.onload = resizePage;
window.onresize = resizePage;