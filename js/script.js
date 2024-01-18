document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    });

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
