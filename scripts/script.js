const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".fa-bars");
const menuClose = document.querySelector(".fa-xmark");
const body = document.body;

menuToggle.addEventListener("click", menuSlide);
menuClose.addEventListener("click", menuSlide);

function menuSlide() {
  menu.classList.toggle("show");
  body.classList.toggle("stop-scroll");
}
