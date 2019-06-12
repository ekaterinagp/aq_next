//MENU
let menuOpen = false;
const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const bars = menuIcon.querySelectorAll("rect");
let menuLinks = document.querySelectorAll(".menu>ul>li");
const header = document.querySelector("header");
// let dropdown = document.querySelector(".dropdown-content");
menuIcon.addEventListener("click", () => {
  // console.log("menu clicked")
  toggleMenu();
});
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu;
  });
});
// Link clicked menu closed

let toggleMenu = () => {
  // console.log("oopen");
  menuOpen = !menuOpen;
  bars[0].classList.toggle("rotateDown");
  bars[1].classList.toggle("fadeOut");
  bars[2].classList.toggle("rotateUp");
  menu.classList.toggle("hiddenMenu");
};

//MENU ends
