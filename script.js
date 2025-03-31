document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
});

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    this.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

let index = 0, text = "I am a Web Developer";
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text[index++];
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

document.getElementById("ResumeBtn").addEventListener("click", () => {
    Object.assign(document.getElementById("pdfObject"), { data: "YashwinResume.pdf", style: "display: block;" });
});

document.addEventListener("DOMContentLoaded", () => {
    new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("show"));
    }, { threshold: 0.5 }).observe(document.querySelector(".about-container"));
});

document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");
    function animateSkills() {
        bars.forEach(bar => {
            let count = 0, target = parseInt(bar.dataset.width);
            const interval = setInterval(() => {
                count >= target ? clearInterval(interval) : (bar.style.width = ++count + "%", bar.textContent = count + "%");
            }, 15);
        });
    }
    new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && animateSkills());
    }, { threshold: 0.5 }).observe(document.getElementById("skills"));
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    function animateProjects() {
        cards.forEach((card, i) => setTimeout(() => Object.assign(card.style, { opacity: "1", transform: "translateY(0)" }), i * 200));
    }
    new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && animateProjects());
    }, { threshold: 0.3 }).observe(document.getElementById("projects"));
});

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Have a nice day...");
});
