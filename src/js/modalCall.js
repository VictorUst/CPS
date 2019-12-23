let btnShowModal = document.querySelectorAll('.btn--phone');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.modal-call__btn--close');
let modalElem = document.querySelector('.modal-call');

btnShowModal.forEach(function (item) {
  item.addEventListener('click', function () {
    modalElem.classList.add('modal-call--active');
    overlay.classList.add('overlay--active');
    document.body.classList.add('fixed');
  });
});

btnCloseModal.addEventListener('click', function () {
  modalElem.classList.remove('modal-call--active');
  overlay.classList.remove('overlay--active');
});

overlay.addEventListener('click', function () {
  modalElem.classList.remove('modal-call--active');
  overlay.classList.remove('overlay--active');
});
