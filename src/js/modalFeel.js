let btnShowModal = document.querySelectorAll('.btn--message');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.modal-feel__btn--close');
let modalElem = document.querySelector('.modal-feel');

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
