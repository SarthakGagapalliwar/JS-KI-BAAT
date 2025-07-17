let navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('stick');
    } else {
        navbar.classList.remove('stick');
    } 
});
