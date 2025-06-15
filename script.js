document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const animatedElements = document.querySelectorAll("section, .hero-banner");
  animatedElements.forEach(el => {
    el.classList.add("animate-on-load");
  });

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
