const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  menu.classList.toggle('_active');
})