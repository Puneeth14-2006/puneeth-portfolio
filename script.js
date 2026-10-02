const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-category, .project, .timeline-item, .learning-box"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});


const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

const typingText = document.getElementById("typing-text");

const textLines = [
    "AI & ML Engineering Student at JNNCE, Shivamogga",
    "Building scalable projects using Node.js and MongoDB",
    "Designing Secure Auth System with JWT",
    "Exploring LLMs, RAG and Agentic Models"
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textLines[lineIndex];

    if (!isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

        setTimeout(typeEffect, 55);

    } else {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % textLines.length;

            setTimeout(typeEffect, 400);
            return;
        }

        setTimeout(typeEffect, 30);
    }
}

typeEffect();