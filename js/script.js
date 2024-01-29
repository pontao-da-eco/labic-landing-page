document.addEventListener("DOMContentLoaded", function () {
    const backtoTopButton = document.querySelector(".back-to-top");
    const navButton = document.querySelector(".nav-button");
    const navBar = document.querySelector("nav");
    const header = document.querySelector("header");
    const registerButtons = document.querySelectorAll(".register-button");

    registerButtons[0].disabled = false;
    registerButtons[0].style.cursor = "pointer";
    registerButtons[1].disabled = true;
    registerButtons[1].style.cursor = "not-allowed";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) backtoTopButton.classList.add("show");
        else backtoTopButton.classList.remove("show");
    });

    backtoTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    navButton.addEventListener("click", function () {
        if (navBar.classList.contains("show")) {
            navBar.classList.remove("show");
            header.style.height = "20vh";
        } else {
            navBar.classList.add("show");
            header.style.height = "70rem";
        }
    });

    window.addEventListener("resize", function () {
        if (window.matchMedia("screen and (min-width: 1100px)").matches) {
            header.style.height = "20vh";
            navBar.classList.remove("show");
        }
    });

    window.addEventListener("mouseup", function (event) {
        if (event.target != header && event.target != navButton) {
            navBar.classList.remove("show");
            header.style.height = "20vh";
        }
    });
});

function redirectToForm(url) {
    window.open(url, "_blank");
}
