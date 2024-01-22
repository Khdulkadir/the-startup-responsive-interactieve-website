const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".fa-bars");
const menuClose = document.querySelector(".fa-xmark");
const body = document.body;

menuToggle.addEventListener("click", menuSlide);
menuClose.addEventListener("click", menuSlide);
body.addEventListener("click", closeMenuOutsideClick);

function menuSlide() {
  menu.classList.toggle("show");
  body.classList.toggle("stop-scroll");
}

function closeMenuOutsideClick(event) {
  // Check if the clicked element is not inside the menu
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("show");
    body.classList.remove("stop-scroll");
  }
}
