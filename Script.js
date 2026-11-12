
// ALYX STUDIO — Website Interactions

document.addEventListener("DOMContentLoaded", () => {

  // Reveal sections while scrolling
  const sections = document.querySelectorAll(
    ".hero, .section, .contact, footer"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.12
  });

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });

  // Current year in footer
  const footerText = document.querySelector("footer p:last-child");

  if (footerText) {
    footerText.textContent =
      `© ${new Date().getFullYear()} ALYX STUDIO. All rights reserved.`;
  }

});
