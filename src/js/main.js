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

// =============================
// Product Details Page Interactions
// =============================
$(document).ready(function () {
  // Fade-in animation for sections
  $(".fade-section").each(function (i) {
    $(this)
      .delay(120 * i)
      .queue(function (next) {
        $(this).addClass("show");
        next();
      });
  });

  // Quantity selector
  $(".quantity-selector .qty-btn").on("click", function () {
    var $input = $(this).siblings(".qty-input");
    var current = parseInt($input.val(), 10);
    if ($(this).hasClass("plus")) {
      $input.val(current + 1);
      $input.trigger("change");
    } else if ($(this).hasClass("minus")) {
      if (current > 1) {
        $input.val(current - 1);
        $input.trigger("change");
      }
    }
  });

  // Add to Cart button animation
  $(".add-to-cart-btn").on("click", function () {
    var $btn = $(this);
    $btn.addClass("cart-animate");
    setTimeout(function () {
      $btn.removeClass("cart-animate");
    }, 400);
  });

  // Product image zoom (hover and click)
  var $img = $("#mainProductImg");
  $img.on("mousemove", function (e) {
    var offset = $(this).offset();
    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;
    var w = $(this).width();
    var h = $(this).height();
    $(this).css("transform-origin", (x / w) * 100 + "% " + (y / h) * 100 + "%");
  });
  $img.on("mouseenter", function () {
    $(this).css("transform", "scale(1.13)");
  });
  $img.on("mouseleave", function () {
    $(this).css({ transform: "", "transform-origin": "" });
  });
  $img.on("click", function () {
    $(this).toggleClass("zoomed");
    if ($(this).hasClass("zoomed")) {
      $(this).css("transform", "scale(2.1)");
    } else {
      $(this).css("transform", "scale(1.13)");
    }
  });

  // Tabs animated switching
  $("#productTab .nav-link").on("shown.bs.tab", function (e) {
    var $pane = $($(e.target).attr("data-bs-target"));
    $pane.find("> div").addClass("tab-pane-animate");
    setTimeout(function () {
      $pane.find("> div").removeClass("tab-pane-animate");
    }, 500);
  });

  // Material Calculator
  $(document).ready(function () {
    $(".calc-form").on("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      calculateMaterial($(this), $(".calc-results"));
    });

    $(".btn-reset").on("click", function () {
      var $form = $(this).closest(".calc-form");
      $form[0].reset();
      $(".calc-results").hide();
    });
  });
  function calculateMaterial($form, $results) {
    var length = parseFloat($form.find(".calc-length").val()) || 0;
    var width = parseFloat($form.find(".calc-width").val()) || 0;
    var depth = parseFloat($form.find(".calc-depth").val()) || 0;
    var unit = $form.find(".calc-unit").val();
    if (unit === "Feet") {
      // nothing
    } else if (unit === "Meters") {
      length *= 3.28084;
      width *= 3.28084;
    }
    var area = length * width;
    var volume = area * (depth / 12);
    var material = volume / 27;
    var cost = material * 35;
    if (area && volume && material && cost) {
      $results
        .find(".result-area")
        .text(
          area.toLocaleString(undefined, { maximumFractionDigits: 2 }) +
            " sq ft",
        );
      $results
        .find(".result-volume")
        .text(
          volume.toLocaleString(undefined, { maximumFractionDigits: 2 }) +
            " cu ft",
        );
      $results
        .find(".result-material")
        .text(
          material.toLocaleString(undefined, { maximumFractionDigits: 2 }) +
            " tons",
        );
      $results.find(".result-cost").text(
        "$" +
          cost.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
      );
      $results.addClass("fade-in").show();
    } else {
      $results.hide();
    }
  }
  $(".calc-form").on("submit", function (e) {
    e.preventDefault();
    var $form = $(this);
    var $results = $form.closest(".calc-row").find(".calc-results");
    calculateMaterial($form, $results);
  });
  $(".btn-reset").on("click", function () {
    var $form = $(this).closest(".calc-form");
    $form[0].reset();
    var $results = $form.closest(".calc-row").find(".calc-results");
    $results.hide();
  });

  // Star rating for review
  $(".review-form .star-rating .bi")
    .on("mouseenter", function () {
      var idx = $(this).index();
      $(this)
        .parent()
        .children(".bi")
        .each(function (i) {
          $(this).toggleClass("active", i <= idx);
        });
    })
    .on("mouseleave", function () {
      var $parent = $(this).parent();
      var selected = $parent.data("selected") || 0;
      $parent.children(".bi").each(function (i) {
        $(this).toggleClass("active", i < selected);
      });
    })
    .on("click", function () {
      var idx = $(this).index() + 1;
      var $parent = $(this).parent();
      $parent.data("selected", idx);
      $parent.children(".bi").each(function (i) {
        $(this).toggleClass("active", i < idx);
      });
      $parent.siblings("input.rating-value").val(idx);
    });

  // Review submit animation
  $(".review-form").on("submit", function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find(".btn-submit-review").addClass("cart-animate");
    setTimeout(function () {
      $form.find(".btn-submit-review").removeClass("cart-animate");
      $form[0].reset();
      $form.find(".star-rating .bi").removeClass("active");
      $form.find(".star-rating").data("selected", 0);
    }, 700);
  });
});

// =============================
// ECOMMERCE PAGES JS (CART, CHECKOUT, WISHLIST, ORDERS, ORDER HISTORY)
// =============================

// --- CART PAGE LOGIC ---
$(function () {
  if ($(".cart").length) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [
      {
        id: 1,
        name: "Crushed Limestone",
        price: 7.99,
        qty: 2,
        img: "assets/images/product1.jpg",
      },
      {
        id: 2,
        name: "Crushed Limestone",
        price: 7.99,
        qty: 2,
        img: "assets/images/product1.jpg",
      },
      {
        id: 3,
        name: "Crushed Limestone",
        price: 7.99,
        qty: 2,
        img: "assets/images/product1.jpg",
      },
      {
        id: 4,
        name: "Crushed Limestone",
        price: 7.99,
        qty: 2,
        img: "assets/images/product1.jpg",
      },
      {
        id: 5,
        name: "Crushed Limestone",
        price: 7.99,
        qty: 2,
        img: "assets/images/product1.jpg",
      },
    ];
    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    function renderCart() {
      let html = "";
      cart.forEach((item, i) => {
        html += `<tr data-id="${item.id}">
            <td><div class="cart-product"><div class="cart-img"><img src="${item.img}" alt="${item.name}"></div><div class="cart-info"><div class="cart-title">${item.name}</div><div class="cart-meta">Stone</div></div></div></td>
            <td>$${item.price.toFixed(2)}</td>
            <td><div class="cart-qty"><button class="qty-btn minus">-</button><input class="qty-input" type="text" value="${item.qty}" readonly><button class="qty-btn plus">+</button></div></td>
            <td class="cart-subtotal">$${(item.price * item.qty).toFixed(2)}</td>
            <td class="cart-remove"><button class="btn btn-danger btn-remove">&times;</button></td>
          </tr>`;
      });
      $("#cartItems").html(html);
      updateSummary();
      if (cart.length === 0) $(".cart-table").hide();
      else $(".cart-table").show();
    }
    function updateSummary() {
      let subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      let shipping = Number($("input[name=shipping]:checked").val() || 0);
      let total = subtotal + shipping;
      $("#cartSubtotal").text(`$${subtotal.toFixed(2)}`);
      $("#cartTotal").text(`$${total.toFixed(2)}`);
    }
    // Quantity
    $("#cartItems").on("click", ".qty-btn", function () {
      let $row = $(this).closest("tr");
      let id = Number($row.data("id"));
      let item = cart.find((x) => x.id === id);
      if ($(this).hasClass("plus")) item.qty++;
      if ($(this).hasClass("minus") && item.qty > 1) item.qty--;
      saveCart();
      renderCart();
    });
    // Remove
    $("#cartItems").on("click", ".btn-remove", function () {
      let $row = $(this).closest("tr");
      $row.slideUp(300, function () {
        let id = Number($row.data("id"));
        cart = cart.filter((x) => x.id !== id);
        saveCart();
        renderCart();
      });
    });
    // Shipping
    $("input[name=shipping]").on("change", updateSummary);
    // Coupon (demo only)
    $("#applyCoupon").on("click", function () {
      alert("Coupon applied! (demo only)");
    });
    // Update Cart
    $("#updateCart").on("click", function () {
      alert("Cart updated! (demo only)");
    });
    // Proceed to Checkout
    $("#proceedCheckout").on("click", function () {
      window.location.href = "checkout.html";
    });
    renderCart();
  }
});

// --- CHECKOUT PAGE LOGIC ---
$(function () {
  if ($(".checkout").length) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    function renderSummary() {
      let html = "";
      let subtotal = 0;
      cart.forEach((item) => {
        html += `<div class="summary-row"><span>${item.name} x${item.qty}</span><span>$${(item.price * item.qty).toFixed(2)}</span></div>`;
        subtotal += item.price * item.qty;
      });
      $("#orderSummaryItems").html(html);
      $("#orderSubtotal").text(`$${subtotal.toFixed(2)}`);
      let shipping = 5.0;
      $("#orderShipping").text(`$${shipping.toFixed(2)}`);
      $("#orderTotal").text(`$${(subtotal + shipping).toFixed(2)}`);
    }
    renderSummary();
    // Form validation
    $("#placeOrder").on("click", function (e) {
      e.preventDefault();
      let valid = true;
      $("#checkoutForm input, #checkoutForm select").each(function () {
        let $el = $(this);
        if (!$el.val()) {
          $el.next(".form-error").text("Required");
          valid = false;
        } else {
          $el.next(".form-error").text("");
        }
      });
      if (valid) {
        alert("Order placed! (demo only)");
        localStorage.removeItem("cart");
        window.location.href = "orders.html";
      }
    });
  }
});

// --- WISHLIST PAGE LOGIC ---
$(function () {
  if ($(".wishlist").length) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [
      {
        id: 1,
        name: "Crushed Limestone",
        price: 7.99,
        img: "assets/images/product1.jpg",
      },
      {
        id: 2,
        name: "River Pebbles",
        price: 12.49,
        img: "assets/images/product2.jpg",
      },
    ];
    function saveWishlist() {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    function renderWishlist() {
      if (wishlist.length === 0) {
        $("#wishlistGrid").hide();
        $("#wishlistEmpty").show();
        return;
      }
      let html = "";
      wishlist.forEach((item) => {
        html += `<div class="wishlist-card" data-id="${item.id}">
            <img class="card-img" src="${item.img}" alt="${item.name}">
            <div class="card-title">${item.name}</div>
            <div class="card-price">$${item.price.toFixed(2)}</div>
            <div class="wishlist-actions">
              <button class="btn btn-secondary btn-move">Move to Cart</button>
              <button class="btn btn-danger btn-remove">Remove</button>
            </div>
          </div>`;
      });
      $("#wishlistGrid").html(html).show();
      $("#wishlistEmpty").hide();
    }
    // Remove
    $("#wishlistGrid").on("click", ".btn-remove", function () {
      let $card = $(this).closest(".wishlist-card");
      $card.slideUp(300, function () {
        let id = Number($card.data("id"));
        wishlist = wishlist.filter((x) => x.id !== id);
        saveWishlist();
        renderWishlist();
      });
    });
    // Move to Cart
    $("#wishlistGrid").on("click", ".btn-move", function () {
      let $card = $(this).closest(".wishlist-card");
      let id = Number($card.data("id"));
      let item = wishlist.find((x) => x.id === id);
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...item, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      $card.slideUp(300, function () {
        wishlist = wishlist.filter((x) => x.id !== id);
        saveWishlist();
        renderWishlist();
      });
    });
    renderWishlist();
  }
});

// --- ORDERS PAGE LOGIC ---
$(function () {
  if ($(".orders").length) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [
      {
        id: 101,
        date: "2026-02-25",
        status: "pending",
        total: 15.98,
        products: [
          {
            name: "Crushed Limestone",
            qty: 2,
            img: "assets/images/product1.jpg",
          },
        ],
      },
      {
        id: 102,
        date: "2026-02-20",
        status: "shipped",
        total: 12.49,
        products: [
          { name: "River Pebbles", qty: 1, img: "assets/images/product2.jpg" },
        ],
      },
      {
        id: 103,
        date: "2026-01-15",
        status: "delivered",
        total: 7.99,
        products: [
          {
            name: "Crushed Limestone",
            qty: 1,
            img: "assets/images/product1.jpg",
          },
        ],
      },
    ];
    function renderOrders() {
      let html = "";
      orders.forEach((order) => {
        html += `<div class="order-card" data-id="${order.id}">
            <div class="order-header">
              <span class="order-id">Order #${order.id}</span>
              <span class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
            </div>
            <div class="order-summary-row"><span>Date</span><span>${order.date}</span></div>
            <div class="order-summary-row"><span>Total</span><span>$${order.total.toFixed(2)}</span></div>
            <div class="order-actions">
              <button class="btn btn-secondary btn-track">Track Order</button>
              <button class="btn btn-outline btn-toggle-details">Details</button>
            </div>
            <div class="order-details">
              <div class="order-products">
                ${order.products.map((p) => `<div class="order-product"><div class="order-img"><img src="${p.img}" alt="${p.name}"></div><div class="order-info"><div class="order-title">${p.name}</div><div>Qty: ${p.qty}</div></div></div>`).join("")}
              </div>
            </div>
          </div>`;
      });
      $("#ordersList").html(html);
    }
    // Toggle details
    $("#ordersList").on("click", ".btn-toggle-details", function () {
      let $card = $(this).closest(".order-card");
      let $details = $card.find(".order-details");
      $details.slideToggle(300).toggleClass("open");
    });
    renderOrders();
  }
});

// --- ORDER HISTORY PAGE LOGIC ---
$(function () {
  if (!$(".order-history").length) return;

  let orders = JSON.parse(localStorage.getItem("orders")) || [
    { id: 101, date: "2026-02-25", status: "pending", total: 15.98 },
    { id: 102, date: "2026-02-20", status: "shipped", total: 12.49 },
    { id: 103, date: "2026-01-15", status: "delivered", total: 7.99 },
    { id: 104, date: "2026-01-10", status: "cancelled", total: 7.99 },
  ];

  let perPage = 3;
  let page = 1;
  let filter = "all";

  /* =========================
      Render Table
  ========================== */
  function renderTable() {
    let filtered =
      filter === "all"
        ? orders
        : orders.filter((o) => o.date.startsWith(filter));

    let totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

    if (page > totalPages) page = totalPages;

    let start = (page - 1) * perPage;
    let paginated = filtered.slice(start, start + perPage);

    let html = "";

    if (!paginated.length) {
      html = `
        <tr>
          <td colspan="5" style="text-align:center;">No Orders Found</td>
        </tr>
      `;
    } else {
      paginated.forEach((order) => {
        html += `
          <tr data-id="${order.id}">
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>
              <span class="order-status ${order.status}">
                ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </td>
            <td>$${order.total.toFixed(2)}</td>
            <td>
              <button class="btn btn-outline btn-invoice">
                View Invoice
              </button>
            </td>
          </tr>
        `;
      });
    }

    $("#orderHistoryBody").html(html);
    renderPagination(totalPages);
  }

  /* =========================
      Pagination
  ========================== */
  function renderPagination(totalPages) {
    let html = "";

    for (let i = 1; i <= totalPages; i++) {
      html += `
        <span class="page-item">
          <a href="#" class="page-link ${i === page ? "active" : ""}">
            ${i}
          </a>
        </span>
      `;
    }

    $("#orderHistoryPagination").html(html);
  }

  /* =========================
      Pagination Click
  ========================== */
  $("#orderHistoryPagination").on("click", ".page-link", function (e) {
    e.preventDefault();
    page = Number($(this).text());
    renderTable();
  });

  /* =========================
      Filter Change
  ========================== */
  $("#filterDate").on("change", function () {
    filter = $(this).val();
    page = 1;
    renderTable();
  });

  /* =========================
      Invoice Modal
  ========================== */
  $("#orderHistoryBody").on("click", ".btn-invoice", function () {
    let id = Number($(this).closest("tr").data("id"));
    let order = orders.find((o) => o.id === id);

    if (!order) return;

    let html = `
      <div>
        <strong>Order #${order.id}</strong><br>
        Date: ${order.date}<br>
        Status: ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}<br>
        Total: $${order.total.toFixed(2)}
      </div>
    `;

    $("#invoiceContent").html(html);
    $("#invoiceModal").addClass("open");
  });

  /* Close Modal */
  $("#closeInvoiceModal").on("click", function () {
    $("#invoiceModal").removeClass("open");
  });

  /* Close on Overlay Click */
  $("#invoiceModal").on("click", function (e) {
    if ($(e.target).is("#invoiceModal")) {
      $("#invoiceModal").removeClass("open");
    }
  });

  renderTable();
});
