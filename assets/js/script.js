// Sticky
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll Link
const sections = document.querySelectorAll("section");
const linkActive = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      linkActive.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav-link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Hero Content Animation
var typingEffect = new Typed(".multiText", {
  strings: ["Lorensa", "Nabila", "Lintang", "Andara"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// Contact Popup
const contactPopup = document.querySelector(".contact-wrapper");
const contactForm = document.querySelector(".popup-contact");
const openContact = document.querySelectorAll(".btn-open-popup-contact");
const closeContact = document.querySelector(".btn-close-popup-contact");
const scrollBody = document.body;

openContact.forEach((openButton) => {
  openButton.addEventListener("click", function () {
    contactPopup.classList.toggle("active");
    scrollBody.classList.add("no-scroll");
  });
});

closeContact.addEventListener("click", () => {
  contactPopup.classList.remove("active");
  scrollBody.classList.remove("no-scroll");
});

document.addEventListener("click", (e) => {
  if (
    !contactForm.contains(e.target) &&
    ![...openContact].some((openButton) => openButton.contains(e.target))
  ) {
    contactPopup.classList.remove("active");
    scrollBody.classList.remove("no-scroll");
  }
});

// AOS
AOS.init({
  once: false,
  duration: 1000,
});

// Gsap
gsap.from(".nav-logo", { duration: 1, x: -200 });
gsap.from(".nav-menu", { duration: 1.5, x: 200 });
gsap.from(".hero-content", { duration: 1, x: -200 });
gsap.from(".hero-content-btn", { duration: 1, y: 200, opacity: 0 });
gsap.from(".img-profile", { duration: 2, y: -400, ease: "bounce" });
gsap.from(".img-blob", { duration: 2.5, y: -300, ease: "bounce" });
