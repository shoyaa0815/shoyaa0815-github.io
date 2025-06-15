const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const menuToggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

if (menuToggleBtn && navMenu) {
  menuToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

const mainNavbar = document.getElementById("navbar");
let previousScrollTop = 0;

if (mainNavbar) {
  window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > previousScrollTop) {
      mainNavbar.style.top = "-60px";
    } else {
      mainNavbar.style.top = "0";
    }

    previousScrollTop = currentScrollTop;
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const scrollTarget = document.querySelector(this.getAttribute("href"));
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("section, .hero-banner");
  animatedElements.forEach(el => {
    el.classList.add("animate-on-load");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedTextElements = document.querySelectorAll(".text-animate-text");

  animatedTextElements.forEach(el => {
    const text = el.textContent;
    el.textContent = "";

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("text-animate");
      span.style.animationDelay = `${index * 0.03}s`;
      el.appendChild(span);
    });
  });
});
