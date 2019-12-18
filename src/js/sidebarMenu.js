let burgerBtn = document.querySelector('.btn--burger');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.sidebar-menu__btn--close');
let menu = document.querySelector('.sidebar-menu');

burgerBtn.addEventListener('click', function () {
  menu.classList.add('sidebar-menu--active');
  overlay.classList.add('overlay--active');
});


closeBtn.addEventListener('click', function () {
  menu.classList.remove('sidebar-menu--active');
  overlay.classList.remove('overlay--active');
});
