// Initialize Animate On Scroll (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.right = '0';
            nav.style.background = 'rgba(0,0,0,0.95)';
            nav.style.width = '100%';
            nav.style.padding = '2rem';
            nav.style.textAlign = 'center';
        }
    });
}