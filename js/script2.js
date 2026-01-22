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


//=====================================================CSE==========================================================
// Fade-up animation on scroll
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

fadeElements.forEach(el => observer.observe(el));


//==========================================================ME=================================================================
// Scroll animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(".fade-up, .fade-slide");

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // run once
                }
            });
        },
        { threshold: 0.2 }
    );

    animatedElements.forEach(el => observer.observe(el));
});


//=======================================================EE=====================================================================
document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(".fade-up");

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        { threshold: 0.2 }
    );

    animatedElements.forEach(el => observer.observe(el));
});


//==================================================================CIVIL============================================================
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
});


//=========================================================================contact us================================================
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
});



//=====================================================================staff login===============================================
document.addEventListener("DOMContentLoaded", () => {
    // ===== Fade-up animation =====
    const fadeElements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    fadeElements.forEach(el => observer.observe(el));

    // ===== Show/Hide password toggle =====
    const passwordInput = document.querySelector('input[type="password"]');

    if (passwordInput) {
        const toggleBtn = document.createElement("span");
        toggleBtn.style.position = "absolute";
        toggleBtn.style.right = "20px";
        toggleBtn.style.top = "50%";
        toggleBtn.style.transform = "translateY(-50%)";
        toggleBtn.style.cursor = "pointer";

        const parent = passwordInput.parentElement;
        parent.style.position = "relative";
        parent.appendChild(toggleBtn);

        toggleBtn.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    }
});



//==============================================================explore opportunities======================================================

document.addEventListener("DOMContentLoaded", () => {
    // ===== Fade-up Animation =====
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeElements.forEach(el => observer.observe(el));
});


//======================================================================resinfrastructure=======================================
document.addEventListener("DOMContentLoaded", () => {
    // ===== Fade-up Animation =====
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeElements.forEach(el => observer.observe(el));
});
