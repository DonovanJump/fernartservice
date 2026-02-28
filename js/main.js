/* Fern Art Services — Main JS */
(function () {
  'use strict';

  /* --- Current year in footer --- */
  var yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* --- Mobile nav toggle --- */
  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close nav when a link is clicked */
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Sticky header shadow on scroll --- */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* --- Contact form (client-side feedback only) --- */
  var form   = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = form.elements['name'].value.trim();
      var email   = form.elements['email'].value.trim();
      var message = form.elements['message'].value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill in all required fields.';
        status.className   = 'form-status error';
        return;
      }

      /* Basic email format check */
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Please enter a valid email address.';
        status.className   = 'form-status error';
        return;
      }

      /* Success message — replace with real backend/service as needed */
      status.textContent = 'Thank you! We\'ll be in touch shortly.';
      status.className   = 'form-status success';
      form.reset();
    });
  }
}());
