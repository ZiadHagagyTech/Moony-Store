// Navbar Responsive (reuse logic)
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 700) {
                navLinks.classList.remove('open');
            }
        });
    });
}

// Contact Form Handler (Fake)
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formSuccess.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3500);
    });
}