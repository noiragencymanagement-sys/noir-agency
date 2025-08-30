/* ===== Reveal on scroll ===== */
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

/* ===== How it Works Accordion ===== */
document.querySelectorAll(".step-header").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const panel = document.getElementById(targetId);
        btn.classList.toggle("active");
        panel.classList.toggle("open");
    });
});

/* ===== FAQ Accordion ===== */
document.querySelectorAll(".faq-header").forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        btn.classList.toggle("active");
        target.classList.toggle("open");
    });
});

/* ===== Header Hide on Scroll ===== */
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down past the top 100px
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});
