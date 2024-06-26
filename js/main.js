'use strict'


//  Переход по якорным ссылкам
const anchors = document.querySelectorAll(".scroll-to");
const menuItems = document.querySelectorAll(".nav-link");

anchors.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});



new WOW().init()