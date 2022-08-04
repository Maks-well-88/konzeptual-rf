const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close-btn');
const openPopupButton = document.querySelector('.header__navigation-mobile-icon');
const body = document.querySelector('.page');

openPopupButton.addEventListener('click', () => {
  popup.classList.toggle('popup_opened');
  body.classList.toggle('page_state_hidden');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.toggle('popup_opened');
  body.classList.toggle('page_state_hidden');
});
