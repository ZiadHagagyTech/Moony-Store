// Tab Filtering for Products
const tabs = document.querySelectorAll('.tab-btn');
const products = document.querySelectorAll('.product-card');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        products.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Optional: Activate "الكل" tab on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-btn[data-category="all"]').click();
});


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
