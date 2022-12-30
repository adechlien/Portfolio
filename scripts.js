
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

ScrollReveal().reveal('#myImage', {
    duration: 2000,
    distance: '150%',
    origin: 'left',
    opacity: null
});