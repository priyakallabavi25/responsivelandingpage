// Select the navbar
const navbar = document.getElementById('navbar');

// Add a scroll event listener
window.onscroll = function () {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};