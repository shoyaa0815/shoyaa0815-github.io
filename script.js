document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  document.querySelectorAll("section, .hero-banner").forEach(el => {
    el.classList.add("animate-on-load");
  });

  document.querySelectorAll(".text-animate-text").forEach(el => {
    const text = el.textContent;
    el.textContent = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("text-animate");
      span.style.animationDelay = `${i * 0.03}s`;
      el.appendChild(span);
    });
  });
});
