let burgerBtn = document.querySelector('.btn--burger');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.sidebar-menu__btn--close');
let menu = document.querySelector('.sidebar-menu');
let phoneBtn = document.querySelector('.sidebar-menu__btn--phone');
let modalCall = document.querySelector('.modal-call');
let messageBtn = document.querySelector('.sidebar-menu__btn--message');
let modalFeel = document.querySelector('.modal-feel');

burgerBtn.addEventListener('click', function () {
  menu.classList.add('sidebar-menu--active');
  overlay.classList.add('overlay--active');
  document.body.classList.add('fixed');
});

closeBtn.addEventListener('click', function () {
  menu.classList.remove('sidebar-menu--active');
  overlay.classList.remove('overlay--active');
});

overlay.addEventListener('click', function () {
  menu.classList.remove('sidebar-menu--active');
  overlay.classList.remove('overlay--active');
});

phoneBtn.addEventListener('click', function () {
  modalCall.classList.add('modal-call--active');
  menu.classList.remove('sidebar-menu--active');
});

messageBtn.addEventListener('click', function () {
  modalFeel.classList.add('modal-feel--active');
  menu.classList.remove('sidebar-menu--active');
});
