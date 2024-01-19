document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) button.classList.add("show");
        else button.classList.remove("show");
    });

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".nav-button");
    const navBar = document.querySelector("nav");
    const header = document.querySelector("header");

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
