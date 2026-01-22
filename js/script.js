/* =====================================
   Trident Academy of Technology
   Main JavaScript
===================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initHeroSlider();
    initScrollTop();
    initSmoothScroll();
    initAnimations();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}









function initScrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    
    if (scrollTop) {
        // Show/hide button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || !href) return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Animations
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll(
        '.info-box, .program-card, .welcome-content, .footer-col'
    );
    
    if (!('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'all 0.6s ease-out';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Counter Animation for Numbers
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Animate counters when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('h3');
            if (counter) {
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                if (!isNaN(target)) {
                    counter.textContent = '0';
                    animateCounter(counter, target);
                }
            }
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.info-box').forEach(box => {
    counterObserver.observe(box);
});

/**
 * Form Validation (if forms exist)
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            
            // Show error message
            let errorMsg = input.nextElementSibling;
            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                errorMsg = document.createElement('span');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'This field is required';
                errorMsg.style.color = 'red';
                errorMsg.style.fontSize = '12px';
                input.parentNode.insertBefore(errorMsg, input.nextSibling);
            }
        } else {
            input.classList.remove('error');
            const errorMsg = input.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
                errorMsg.remove();
            }
        }
    });
    
    return isValid;
}

// Add form validation to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
        }
    });
});

/**
 * Active Navigation Link Highlight
 */
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.parentElement.classList.add('active');
            }
        });
    });
}

highlightActiveNav();

/**
 * Lazy Loading Images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

/**
 * Disable Right Click (Optional - for image protection)
 */
function disableRightClick() {
    document.addEventListener('contextmenu', function(e) {
        // Allow right-click on input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return true;
        }
        e.preventDefault();
        return false;
    });
}

// Uncomment to enable right-click protection
// disableRightClick();

/**
 * Console Welcome Message
 */
console.log('%c Welcome to Trident Academy of Technology!', 'color: #1e40af; font-size: 20px; font-weight: bold;');
console.log('%c Excellence in Engineering Education', 'color: #3b82f6; font-size: 14px;');
console.log('%c Contact: info@tat.ac.in', 'color: #64748b; font-size: 12px;');

/**
 * Export functions for external use
 */
window.TATAcademy = {
    moveSlide: moveSlide,
    goToSlide: goToSlide,
    validateForm: validateForm
};


// ================= ACTIVE NAV LINK =================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.parentElement.classList.add("active");
    }
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});



// =======admission=========
/* ===========================
   MAIN SITE JAVASCRIPT
=========================== */

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-menu li");

    navLinks.forEach(li => {
        const link = li.querySelector("a");
        if (link && link.getAttribute("href").includes(currentPage)) {
            li.classList.add("active");
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Simple mobile menu toggle (optional future use)
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Console branding
console.log(
    "%c🎓 Trident Academy of Technology",
    "color:#2563eb;font-size:18px;font-weight:bold"
);






//========================research.html===================
// ================= ACTIVE NAV LINK =================
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-menu a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.parentElement.classList.add("active");
        }
    });
});

// ================= SIMPLE SCROLL EFFECT =================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".nav-section");
    if (window.scrollY > 80) {
        header.style.background = "#002244";
    } else {
        header.style.background = "#003366";
    }
});




//============training========
// ================= ACTIVE MENU =================
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav-menu a");
    const page = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {
        if (link.getAttribute("href").includes(page)) {
            link.parentElement.classList.add("active");
        }
    });
});

// ================= HEADER SCROLL EFFECT =================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".nav-section");
    header.style.background = window.scrollY > 80 ? "#002244" : "#003366";
});





//==============================facilitates===============================================
/* ================= FACILITIES PAGE ANIMATION ================= */

// Scroll animation
const animatedItems = document.querySelectorAll(".fade-up");

function showOnScroll() {
    const triggerPoint = window.innerHeight - 100;

    animatedItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerPoint) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

/* ================= ACTIVE MENU ================= */
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav-menu a");
    const page = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {
        if (link.getAttribute("href").includes(page)) {
            link.parentElement.classList.add("active");
        }
    });
});





//==========================placement==========================================
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 200;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});




//=========================================cse===========================================

/* ================= CSE PAGE SCRIPT ================= */
document.addEventListener("DOMContentLoaded", () => {

    const fadeItems = document.querySelectorAll(".fade-up");

    function revealOnScroll() {
        const triggerPoint = window.innerHeight - 100;

        fadeItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerPoint) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});



//================================================mechanical===========================
/* ================= MECHANICAL PAGE SCRIPT ================= */

const slideItems = document.querySelectorAll(".fade-slide");

function slideReveal() {
    const triggerPoint = window.innerHeight - 100;

    slideItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerPoint) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", slideReveal);
slideReveal();

/* Highlight active menu */
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-menu a");
    const page = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href").includes(page)) {
            link.parentElement.classList.add("active");
        }
    });
});





//============================================electrical===============================
/* ================= ELECTRICAL ENGINEERING SCRIPT ================= */

const electricItems = document.querySelectorAll(".fade-electric");

function electricReveal() {
    const trigger = window.innerHeight - 120;

    electricItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < trigger) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", electricReveal);
electricReveal();

/* Active menu highlight */
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav-menu a");
    const current = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {
        if (link.getAttribute("href").includes(current)) {
            link.parentElement.classList.add("active");
        }
    });
});




//===========================================================civil===========================
/* ================= CIVIL ENGINEERING SCRIPT ================= */

const civilItems = document.querySelectorAll(".fade-civil");

function civilReveal() {
    const trigger = window.innerHeight - 120;

    civilItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < trigger) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", civilReveal);
civilReveal();

/* Active menu highlight */
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav-menu a");
    const currentPage = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.parentElement.classList.add("active");
        }
    });
});





//==================================explore====================================
// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);







