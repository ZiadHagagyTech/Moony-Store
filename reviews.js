// Navbar Responsive (reuse logic if needed)
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

// Add Review Form Fake Handler
const addReviewForm = document.getElementById('addReviewForm');
const reviewFormSuccess = document.getElementById('reviewFormSuccess');
if(addReviewForm) {
    addReviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        reviewFormSuccess.style.display = 'block';
        addReviewForm.reset();
        setTimeout(() => {
            reviewFormSuccess.style.display = 'none';
        }, 3500);
    });
}