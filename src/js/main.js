var langs = document.querySelectorAll(".lang");

langs.forEach((lang) => {
  lang.addEventListener("click", () => {
    langs.forEach((lang) => {
      lang.classList.remove("is-active");
    });
    lang.classList.add("is-active");
  });
});
var langrs = document.querySelectorAll(".langr");

langrs.forEach((langr) => {
  langr.addEventListener("click", () => {
    langrs.forEach((langr) => {
      langr.classList.remove("is-active");
    });
    langr.classList.add("is-active");
  });
});

var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var close = document.querySelector(".cross-01");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);

var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu-2");
var close = document.querySelector(".cross");

var toggleMenu = function toggleMenu() {
  menu - (2).classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);
