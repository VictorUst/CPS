const buttonView = document.querySelector('.about-company__btn-more');
const items = document.querySelectorAll('.about-company__text');

buttonView.addEventListener('click', function () {
  if (buttonView.classList.contains('btn-more--show')) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('about-company__btn-more--hidden');
    }
    buttonView.classList.add('btn-more--hide');
    buttonView.classList.remove('btn-more--show');
    buttonView.innerHTML = 'Читать далее';
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('about-company__btn-more--hidden');
    }
    buttonView.classList.add('btn-more--show');
    buttonView.classList.remove('btn-more--hide');
    buttonView.innerHTML = 'Скрыть';
  }
});
