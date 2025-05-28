// Navbar Responsive (إعادة استخدام الكود)
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

// Gallery Filter Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if(filter === 'all' || item.getAttribute('data-category') === filter){
                item.style.display = 'flex';
                setTimeout(() => {
                    item.style.opacity = "1";
                }, 10);
            } else {
                item.style.opacity = "0";
                setTimeout(() => {
                    item.style.display = 'none';
                }, 120);
            }
        });
    });
});