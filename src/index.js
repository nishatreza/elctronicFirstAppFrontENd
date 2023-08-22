import './styles/main.scss'


document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchForm = document.querySelector(".search-form");
    const closeButton = document.querySelector(".close-button");
    const menu = document.querySelector(".menu");

    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        menu.style.display = "none";
        searchForm.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        searchForm.style.display = "none";
        menu.style.display = "block";
    });
});





