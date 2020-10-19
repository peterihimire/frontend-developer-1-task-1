const navbarBtn = document.querySelector(".nav-btn");
const menuDOM = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu-overlay");
const navbarHeader = document.querySelector(".navbar");
const backToTop = document.querySelector("#back-to-top");
// const pageSection = document.querySelector('section');
var accordions = document.getElementsByClassName("accordion");

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const button = document.querySelector("#c-button");
const msgAlert = document.querySelector("#msg");
const closeBtn = document.querySelector("#close");

// For menu button
navbarBtn.addEventListener("click", () => {
  let value = menuDOM.classList.contains(".show-menu");

  if (value) {
    menuDOM.classList.remove("show-menu");
    navbarBtn.classList.remove("change");
    menuOverlay.classList.remove("transparent-background");
  } else {
    menuDOM.classList.add("show-menu");
    menuOverlay.classList.add("transparent-background");
  }
});

menuOverlay.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("navbar overlay has been clicked");
  let value = menuDOM.classList.contains("show-menu");
  if (value) {
    menuDOM.classList.remove("show-menu");
    navbarBtn.classList.remove("change");
    menuOverlay.classList.remove("transparent-background");
  }
});

// Modal
const modal = document.querySelector("#sell-modal");
const regModalBtn = document.querySelector("#reg-int-btn");

regModalBtn.onclick = () => {
  modal.style.display = "flex";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
