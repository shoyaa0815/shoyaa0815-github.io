document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = '-60px'; 
    } else {
      navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
    });
  });

  const animatedElements = document.querySelectorAll('section, .hero-banner');
  animatedElements.forEach(el => {
    el.classList.add('animate-on-load');
  });

  const animatedTextElements = document.querySelectorAll('.text-animate-text');
  animatedTextElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.classList.add('text-animate');
      span.style.animationDelay = `${index * 0.03}s`;
      el.appendChild(span);
    });
  });
});
