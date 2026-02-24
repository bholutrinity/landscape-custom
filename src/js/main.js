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
