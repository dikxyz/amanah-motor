// ========================================
// PT DUTA KENCANA SEJAHTERA
// Custom JavaScript
// ========================================

console.log("Website PT Duta Kencana Sejahtera berhasil dimuat!");


// ========================================
// FUNGSI CONTOH
// ========================================

function sapaPengunjung() {
  alert("Selamat datang di website kami!");
}


// ========================================
// MOBILE MENU
// ========================================

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");


// Buka / tutup menu
mobileMenuButton.addEventListener("click", function () {

  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenuButton.innerHTML = "☰";
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
  } else {
    mobileMenuButton.innerHTML = "✕";
    mobileMenuButton.setAttribute("aria-label", "Close navigation menu");
  }

});


// Tutup menu setelah memilih menu
mobileMenuLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileMenu.classList.add("hidden");

    mobileMenuButton.innerHTML = "☰";
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");

  });

});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});

// ========================================
// WHATSAPP BUSINESS INQUIRY
// ========================================

const inquiryForm = document.getElementById("inquiry-form");

if (inquiryForm) {

  inquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("inquiry-name").value.trim();
    const company = document.getElementById("inquiry-company").value.trim();
    const message = document.getElementById("inquiry-message").value.trim();

    const whatsappNumber = "6281213345417";

    const whatsappMessage =
`Bengkel Amanah,

Saya Mau Service Motor.

Name: ${name}
Jenis Motor: ${company || "-"}

Service:
${message}

Thank you.`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

  });

}

// ========================================
// BACK TO TOP
// ========================================

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {

  window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

      backToTopButton.classList.remove(
        "opacity-0",
        "invisible",
        "translate-y-4"
      );

    } else {

      backToTopButton.classList.add(
        "opacity-0",
        "invisible",
        "translate-y-4"
      );

    }

  });

  backToTopButton.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}