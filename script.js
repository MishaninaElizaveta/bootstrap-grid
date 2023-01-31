document.addEventListener('DOMContentLoaded', function() {
let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__list');
  let menuLinks = menu.querySelectorAll('.header__item');


  burger.addEventListener('click',

    function () {
      burger.classList.toggle('header__burger--active');
      menu.classList.toggle('header__list--active');
      document.body.classList.toggle('stop-scroll');
    })

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('header__burger--active');
      menu.classList.remove('header__list--active');
      document.body.classList.remove('stop-scroll')
    })
  });
});
