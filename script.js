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

/* ===== Accordion (How it Works) ===== */
document.querySelectorAll(".step-header").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const panel = document.getElementById(targetId);
        btn.classList.toggle("active");
        panel.classList.toggle("open");
    });
});

/* ===== Services Carousel ===== */
(function initCarousel() {
    const track = document.querySelector(".car-track");
    if (!track) return;
    const prev = document.querySelector(".car-btn.prev");
    const next = document.querySelector(".car-btn.next");
    const cards = Array.from(track.children);
    const first = cards[0].cloneNode(true);
    const last = cards[cards.length - 1].cloneNode(true);
    track.insertBefore(last, cards[0]);
    track.appendChild(first);
    let index = 1;9
    const cardWidth = () => cards[0].getBoundingClientRect().width + 16;
    function setTransform(animate = true) {
        track.style.transition = animate ? "transform .45s ease" : "none";
        track.style.transform = `translateX(${-index * cardWidth()}px)`;
    }
    function go(dir) {
        index += dir;
        setTransform(true);
    }
    track.addEventListener("transitionend", () => {
        if (index === 0) {
            index = cards.length;
            setTransform(false);
        }
        if (index === cards.length + 1) {
            index = 1;
            setTransform(false);
        }
    });
    window.addEventListener("load", () => setTransform(false));
    window.addEventListener("resize", () => setTransform(false));
    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    let startX = null;
    track.addEventListener("pointerdown", (e) => {
        startX = e.clientX;
        track.setPointerCapture(e.pointerId);
    });
    track.addEventListener("pointerup", (e) => {
        if (startX == null) return;
        const dx = e.clientX - startX;
        if (dx > 40) go(-1);
        else if (dx < -40) go(1);
        startX = null;
    });
})();

// FAQ accordion
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