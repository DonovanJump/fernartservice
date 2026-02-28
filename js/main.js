/* ============================================
   FERN ART SERVICES — Main JS
   ============================================ */

(function () {
  "use strict";

  // ----- Dynamic copyright year -----
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Mobile nav toggle -----
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    // Close nav when a link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ----- Hero carousel -----
  (function () {
    var slides = document.querySelectorAll(".carousel-slide");
    var dots = document.querySelectorAll(".carousel-dot");
    var current = 0;
    var interval;

    function goTo(index) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
    }

    function advance() {
      goTo(current + 1);
    }

    if (slides.length > 1) {
      interval = setInterval(advance, 4500);

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          clearInterval(interval);
          goTo(parseInt(this.getAttribute("data-target"), 10));
          interval = setInterval(advance, 4500);
        });
      });
    }
  })();

  // ----- Header shadow on scroll -----
  const header = document.getElementById("site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
})();
