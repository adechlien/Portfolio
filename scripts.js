
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// One
ScrollReveal().reveal('#myImage', {
    duration: 2000,
    distance: '150%',
    origin: 'left',
    opacity: null
});

ScrollReveal().reveal('#title', {
    duration: 2000,
    distance: '150%',
    origin: 'right',
    opacity: null
});

// Mobile Nav

function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}