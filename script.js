document.addEventListener("DOMContentLoaded", () => {

  /* SECTION NAVIGATION */
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.dataset.section;

      navLinks.forEach(l => l.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  /* MOBILE INFO TOGGLE */
  const toggleBtn = document.querySelector(".info-toggle-btn");
  const infoList = document.querySelector(".info-list");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
      infoList.classList.toggle("show");
    });
  }

});
