
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

// Two
ScrollReveal().reveal('.java-things', {
    delay: 250,
    duration: 1750,
    distance: '150%',
    origin: 'top'
});

ScrollReveal().reveal('.web-developing', {
    delay: 250,
    duration: 1750,
    distance: '150%',
    origin: 'bottom'
});

ScrollReveal().reveal('.game-developing', {
    delay: 250,
    duration: 1750,
    distance: '150%',
    origin: 'top'
});

// Three

ScrollReveal().reveal('.projects', {
    delay: 250,
    duration: 1750,
    distance: '150%',
    origin: 'bottom'
});

// Mobile Nav

function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}