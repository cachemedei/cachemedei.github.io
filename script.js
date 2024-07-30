document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('mobile-nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        navToggle.classList.toggle('hide');
    });
});