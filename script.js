// Responsive Navbar Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close navbar menu on link click (for mobile UX)
const navLinkElems = document.querySelectorAll('.nav-links li a');
navLinkElems.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 700) {
            navLinks.classList.remove('open');
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 18px rgba(162,89,230,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(162,89,230,0.08)';
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            document.querySelectorAll('.faq-answer').forEach(a=>a.classList.remove('open'));
            answer.classList.add('open');
        }
    });
});

// Stats Counter Animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(num => {
        let start = 0;
        const target = +num.getAttribute('data-target');
        const speed = target < 50 ? 80 : (target < 1000 ? 13 : 3); // speed up for large numbers
        const updateCount = () => {
            const current = +num.innerText.replace('+','');
            if(current < target) {
                num.innerText = Math.ceil(current + (target-current)/speed);
                setTimeout(updateCount, 25);
            } else {
                num.innerText = target;
                if(target >= 1000) num.innerText += "+";
            }
        };
        updateCount();
    });
}
let statsAnimated = false;
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section');
    if(statsSection && !statsAnimated) {
        const rect = statsSection.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom > 0) {
            animateStats();
            statsAnimated = true;
        }
    }
});

// Quick Contact Form Submission (Fake)
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formSuccess.style.display = 'block';
        form.reset();
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3500);
    });
}
