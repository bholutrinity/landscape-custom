// === MODAL LOGIC FOR LOGIN, SIGNUP, SEARCH ===
document.addEventListener("DOMContentLoaded", function () {
  // Modal elements
  const loginModal = document.getElementById("lsLoginModal");
  const signupModal = document.getElementById("lsSignupModal");
  const searchModal = document.getElementById("lsSearchModal");

  // Header icon triggers
  const profileIcon = document.querySelector(
    '.header-icons [aria-label="Profile"]',
  );
  const searchIcon = document.querySelector(
    '.header-icons [aria-label="Search"]',
  );

  // Modal switch links
  const showSignup = document.getElementById("lsShowSignup");
  const showLogin = document.getElementById("lsShowLogin");

  // Utility: open/close modal
  function openModal(modal) {
    [loginModal, signupModal, searchModal].forEach((m) =>
      m.classList.add("d-none"),
    );
    modal.classList.remove("d-none");
    document.body.classList.add("ls-modal-open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function closeAllModals() {
    [loginModal, signupModal, searchModal].forEach((m) =>
      m.classList.add("d-none"),
    );
    document.body.classList.remove("ls-modal-open");
  }

  // Open Login
  if (profileIcon) {
    profileIcon.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(loginModal);
    });
  }
  // Open Search
  if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(searchModal);
    });
  }
  // Switch to Signup
  if (showSignup) {
    showSignup.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(signupModal);
    });
  }
  // Switch to Login
  if (showLogin) {
    showLogin.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(loginModal);
    });
  }

  // ESC key closes modals
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllModals();
  });

  // Click outside modal card closes modal
  [loginModal, signupModal, searchModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener("mousedown", function (e) {
      if (e.target === modal) closeAllModals();
    });
  });

  // Prevent form submit (demo only)
  document
    .querySelectorAll(".ls-modal-form, .ls-signup-form")
    .forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
      });
    });
});
/* Sample custom JavaScript file */
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully");

  // Example: Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// gardern supply js
$(document).ready(function () {
  var owl = $(".gs-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3500,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 4 },
    },
  });

  $(".gs-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".gs-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
// our product js
$(document).ready(function () {
  const $carousel = $(".op-row");

  function toggleOwl() {
    const winWidth = $(window).width();

    if (winWidth < 992) {
      // TABLET & MOBILE → INIT OWL
      if (!$carousel.hasClass("owl-loaded")) {
        $carousel.addClass("owl-carousel").owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            0: {
              items: 1,
            },
            576: {
              items: 2,
            },
            768: {
              items: 3,
            },
          },
        });
      }
    } else {
      // DESKTOP → DESTROY OWL
      if ($carousel.hasClass("owl-loaded")) {
        $carousel.trigger("destroy.owl.carousel");
        $carousel.removeClass("owl-carousel owl-loaded");
        $carousel.find(".owl-stage-outer").children().unwrap();
      }
    }
  }

  toggleOwl();
  $(window).on("resize", toggleOwl);
});

// footer js
document
  .querySelectorAll(".footer .is-collapsible .footer-title")
  .forEach((title) => {
    title.addEventListener("click", () => {
      if (window.innerWidth > 991) return;
      const col = title.closest(".is-collapsible");
      col.classList.toggle("open");
    });
  });
$(document).ready(function () {
  // Testimonials carousel
  $(".ls-testimonial-carousel").owlCarousel({
    loop: true,
    margin: 24,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 700,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
    animateOut: "fadeOutUp",
    animateIn: "fadeInUp",
  });

  // Blog carousel
  $(".ls-blog-carousel").owlCarousel({
    loop: false,
    margin: 24,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });
});
// mobile
$(document).ready(function () {
  let owlInitialized = false;

  function toggleOwl() {
    if ($(window).width() < 768) {
      if (!owlInitialized) {
        $(".gs-info-carousel").addClass("owl-carousel").owlCarousel({
          items: 1,
          loop: true,
          margin: 16,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          dots: true,
          nav: false,
        });
        owlInitialized = true;
      }
    } else {
      if (owlInitialized) {
        $(".gs-info-carousel")
          .trigger("destroy.owl.carousel")
          .removeClass("owl-carousel");
        owlInitialized = false;
      }
    }
  }

  toggleOwl();
  $(window).on("resize", toggleOwl);
});
// filter
// Filter Modal for Mobile
document.addEventListener("DOMContentLoaded", function () {
  var openFilterBtn = document.getElementById("openFilterModal");
  var filterModal = new bootstrap.Modal(document.getElementById("filterModal"));
  if (openFilterBtn) {
    openFilterBtn.addEventListener("click", function () {
      // Clone sidebar filters into modal
      var sidebar = document.getElementById("lsShopFilters");
      var modalContent = document.getElementById("modalFiltersContent");
      if (sidebar && modalContent) {
        modalContent.innerHTML = sidebar.innerHTML;
      }
      filterModal.show();
    });
  }
});
