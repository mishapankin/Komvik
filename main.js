'use strict';

let top_padding = 87.0;
let bottom_padding = 64.0

function resizePage(event) {
    resizeAbout();
    resizeCarousel();
}

function resizeAbout() {
    let about = document.getElementById("about_us");
    let text = document.getElementById("text");

    let x = top_padding / 1080;
    let y = bottom_padding / 1080;

    about.style.height = text.offsetHeight / (1 - x - y) + "px";
    text.style.top = Math.max(x * text.offsetHeight, top_padding) + "px";
}

function resizeCarousel() {
    let items = document.getElementsByClassName("service-item");
    let height = 0;
    for (let item of items) {
        item.classList.add("active");
        item.style.height = "";
        height = Math.max(height, item.offsetHeight);
        item.classList.remove("active");
    }
    items[0].classList.add("active");
    for (let item of items) {
        item.style.height = height + "px";
    }
}

function moveCarousel(page) {
    $("#servicesCarousel").carousel(page);
}

window.onload = resizeCarousel;
window.onresize = resizePage;
