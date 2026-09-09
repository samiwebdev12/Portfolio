// Mobile Navbar code for Responsiveness

const mobileNav = document.getElementById('nav');
const navToggle = document.querySelector('.navbar-toggler');

function setExpanded(expanded) {
    navToggle.setAttribute('aria-expanded', String(expanded));
}

navToggle.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('show');
    setExpanded(isOpen);
});

// close menu when a link is clicked
mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        mobileNav.classList.remove('show');
        setExpanded(false);
    });
});

// close menu when clicking outside of it
document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar-inner') && mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show');
        setExpanded(false);
    }
});

// close menu with the Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show');
        setExpanded(false);
        navToggle.focus();
    }
});