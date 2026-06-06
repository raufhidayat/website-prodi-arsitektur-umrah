
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("open"));
  });
}

document.querySelectorAll(".nav-item > .nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const parent = link.parentElement;
    const dropdown = parent.querySelector(".dropdown");
    if (window.innerWidth <= 1040 && dropdown) {
      event.preventDefault();
      parent.classList.toggle("open");
    }
  });
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
