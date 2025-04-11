document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Menu
  const navLinks = document.getElementById("navLinks");
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (openMenu) {
    openMenu.addEventListener("click", function () {
      navLinks.classList.add("nav-active");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      navLinks.classList.remove("nav-active");
    });
  }

  // Close menu when clicking on a link (for mobile)
  const navItems = document.querySelectorAll(".nav-links ul li a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("nav-active");
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // You can replace this with actual form submission logic
      alert(`Thank you ${name} for your message! We'll get back to you soon.`);

      // Reset form
      contactForm.reset();
    });
  }

  // Scroll animations
  const animateOnScroll = function () {
    const items = document.querySelectorAll(
      ".feature-card, .stat-card, .step, .market-card"
    );

    items.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (itemPosition < screenPosition) {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for scroll animations
  document
    .querySelectorAll(".feature-card, .stat-card, .step, .market-card")
    .forEach((item) => {
      item.style.opacity = 0;
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
  // Run once on page load
  animateOnScroll();
});
