const elementFas = document.querySelector('.fas');

const elementTlacitko = document.querySelector('#menu-tlacitko');

const elementPolozky = document.querySelector('#menu-polozky');

elementTlacitko.addEventListener('click', () => {
  if (elementPolozky.classList.contains('show')) {
    elementPolozky.classList.remove('show');
    elementFas.classList.remove('fa-xmark');
    elementFas.classList.add('fa-bars');
  } else {
    elementPolozky.classList.add('show');
    elementFas.classList.remove('fa-bars');
    elementFas.classList.add('fa-xmark');
  }
});
