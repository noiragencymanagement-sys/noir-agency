// Reveal-Funktion für Elemente beim Scrollen
function revealOnScroll() {
    const els = document.querySelectorAll(".reveal");
    const windowH = window.innerHeight;
    els.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowH - 100) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Akkordeon-Funktion für "How it Works"
document.querySelectorAll(".step-header").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const panel = document.getElementById(targetId);
        btn.classList.toggle("active");
        panel.classList.toggle("open");
    });
});

// Akkordeon-Funktion für FAQ
document.querySelectorAll(".faq-header").forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        btn.classList.toggle("active");
        target.classList.toggle("open");
    });
});

// Header ausblenden beim Scrollen nach unten
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});