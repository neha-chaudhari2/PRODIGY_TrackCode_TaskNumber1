window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    // Add a class when the page is scrolled
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
