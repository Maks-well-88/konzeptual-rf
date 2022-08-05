const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close-btn');
const openPopupButton = document.querySelector('.header__navigation-mobile-icon');
let winX = null;
let winY = null;

openPopupButton.addEventListener('click', () => {
  popup.classList.toggle('popup_opened');
  disableWindowScroll();
});

closePopupButton.addEventListener('click', () => {
  popup.classList.toggle('popup_opened');
  enableWindowScroll();
});

window.addEventListener('scroll', function () {
  if (winX !== null && winY !== null) {
    window.scrollTo(winX, winY);
  }
});

function disableWindowScroll() {
  winX = window.pageXOffset;
  winY = window.pageYOffset;
}

function enableWindowScroll() {
  winX = null;
  winY = null;
}
