const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close-btn');
const openPopupButton = document.querySelector('.header__navigation-mobile-icon');
const body = document.querySelector('.page');
const html = document.getElementsByTagName('html');

openPopupButton.addEventListener('click', () => {
  popup.classList.toggle('popup_opened');
  body.classList.toggle('page_state_hidden');
  html.setAttribute('style', 'overflow: hidden; height: 100%;');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.toggle('popup_opened');
  body.classList.toggle('page_state_hidden');
  html.removeAttribute('style', 'overflow: hidden; height: 100%;');
});
