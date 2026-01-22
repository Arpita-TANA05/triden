// Fade-up animation
const fadeItems = document.querySelectorAll(".fade-up");

function revealOnScroll() {
    fadeItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);




//======================read more===============================================
/* ================= SCROLL FADE ANIMATION ================= */
document.addEventListener("DOMContentLoaded", () => {

    const fadeItems = document.querySelectorAll(".fade-up");

    function revealOnScroll() {
        const windowHeight = window.innerHeight - 100;

        fadeItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* ================= ACTIVE MENU ================= */
    const links = document.querySelectorAll(".nav-menu a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.parentElement.classList.add("active");
        }
    });

});


//==================================contact us =======================================//
// ===============================
// Fade-up animation on scroll
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-up");

    function showOnScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    // Run once on load
    showOnScroll();

    // Run on scroll
    window.addEventListener("scroll", showOnScroll);
});


// ===============================
// Active menu highlight (auto)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-menu li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.parentElement.classList.add("active");
        }
    });
});
