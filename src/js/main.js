const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
  menuBtn.classList.toggle('menu--click')
});