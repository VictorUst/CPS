const buttonView = document.querySelector('.brands__btn-more');
const brandsItems = document.querySelectorAll('.brands__item');

buttonView.addEventListener('click', function () {
  if (buttonView.classList.contains('btn-more--show')) {
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.add('brands__btn-more--hidden');
    }
    buttonView.classList.add('btn-more--hide');
    buttonView.classList.remove('btn-more--show');
    buttonView.innerHTML = 'Показать все';
  } else {
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.remove('brands__btn-more--hidden');
    }
    buttonView.classList.add('btn-more--show');
    buttonView.classList.remove('btn-more--hide');
    buttonView.innerHTML = 'Скрыть';
  }
});
