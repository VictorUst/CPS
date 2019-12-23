let btnShowModal = document.querySelectorAll('.btn--message');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.modal-feel__btn--close');
let modalElem = document.querySelector('.modal-feel');
let phoneBtn = document.querySelector('.sidebar-menu__btn--phone');
let modalCall = document.querySelector('.modal-call');

btnShowModal.forEach(function (item) {
  item.addEventListener('click', function () {
    modalElem.classList.add('modal-feel--active');
    overlay.classList.add('overlay--active');
    document.body.classList.add('fixed');
  });
});

btnCloseModal.addEventListener('click', function () {
  modalElem.classList.remove('modal-feel--active');
  overlay.classList.remove('overlay--active');
});

overlay.addEventListener('click', function () {
  modalElem.classList.remove('modal-feel--active');
  overlay.classList.remove('overlay--active');
});

phoneBtn.addEventListener('click', function () {
  modalCall.classList.add('modal-call--active');
  modalElem.classList.remove('modal-feel--active');
});
