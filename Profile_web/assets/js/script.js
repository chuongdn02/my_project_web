// script.js

// Toggle navigation menu on small screens
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Smooth scroll to section when clicking on navbar items
const navbarItems = document.querySelectorAll('.navbar-link');

navbarItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(item.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });

    navbarMenu.classList.remove('active');
  });
});

// Scroll to top button
const scrollUpButton = document.querySelector('#scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUpButton.classList.add('show');
  } else {
    scrollUpButton.classList.remove('show');
  }
});

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


