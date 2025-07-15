document.addEventListener("DOMContentLoaded", function() {
  /* ----- NAVIGATION BAR FUNCTION ----- */
  function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (!menuBtn) return;
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function () {
    headerShadow();
    scrollActive();
  };

  function headerShadow() {
    const navHeader = document.getElementById("header");
    if (!navHeader) return;
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  /* ----- TYPING EFFECT ----- */
  if (document.querySelector('.typedText')) {
    var typingEffect = new Typed(".typedText", {
      strings: ["Designer", "Developer", "Videographer", "Composer", "Singer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
  }

  /* ----- SCROLL REVEAL ANIMATION ----- */
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".project-container", { delay: 100 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});
    sr.reveal(".viewer-header", { delay: 100 });

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });
  }

  /* ----- ACTIVE LINK ON SCROLL ----- */
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const link = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  }

  /* ----- MENU TOGGLE BUTTON ----- */
  document.getElementById("menu-toggle").addEventListener("click", myMenuFunction);
});
