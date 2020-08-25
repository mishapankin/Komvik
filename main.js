'use strict';

function resizePage(event) {
    let about = document.getElementById("about_us");
    let text = document.getElementById("text");

    let items = document.getElementsByClassName("service-item");
    let height = 0;
    for (let item of items) {
        item.classList.add("active");
        height = Math.max(height, item.offsetHeight);
        item.classList.remove("active");
    }
    items[0].classList.add("active");
    for (let item of items) {
        item.style.height = height + "px";
    }

    let x = 123.0 / 1080;

    about.style.height = text.offsetHeight / (1 - x) + "px";
    text.style.top = Math.max(x * text.offsetHeight, 123) + "px";
}

function moveCarousel(page) {
    $("#servicesCarousel").carousel(page);
}

window.onload = resizePage;
window.onresize = resizePage;

$("#servicesCarousel").carousel({
    interval: false
})