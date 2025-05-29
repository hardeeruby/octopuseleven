const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu open/close on button click
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Close menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });
});
