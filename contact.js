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


// تعطيل الزر الأيمن
document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // تعطيل اختصارات F12 و Ctrl+Shift+I و Ctrl+Shift+J و Ctrl+U
    document.addEventListener("keydown", function (e) {
        if (e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
            (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
        }
    });
