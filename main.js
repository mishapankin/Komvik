'use strict';

function resizePage(event) {
    let about = document.getElementById("about_us");
    let text = document.getElementById("text");

    about.style.height = 123 + text.offsetHeight + "px";
}

window.onload = resizePage;
window.onresize = resizePage;