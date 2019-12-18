const buttonView = document.querySelector('.types-tech__btn-more');
const items = document.querySelectorAll('.types-tech__item');

buttonView.addEventListener('click', function () {
  if (buttonView.classList.contains('btn-more--show')) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('types-tech__btn-more--hidden');
    }
    buttonView.classList.add('btn-more--hide');
    buttonView.classList.remove('btn-more--show');
    buttonView.innerHTML = 'Показать все';
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('types-tech__btn-more--hidden');
    }
    buttonView.classList.add('btn-more--show');
    buttonView.classList.remove('btn-more--hide');
    buttonView.innerHTML = 'Скрыть';
  }
});
