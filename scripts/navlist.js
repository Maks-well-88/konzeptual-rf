const selectors = {
  footerNavigation: '.footer__navigation',
  footerTitleButton: '.footer__title-button',
  footerNavigationItems: '.footer__navigation-items',
  footerTitleWrapper: '.footer__title-wrapper',
};

const footerNavigation = document.querySelector(selectors.footerNavigation);
const footerTitleButtons = footerNavigation.querySelectorAll(selectors.footerTitleButton);

footerTitleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('footer__title-button_style_rotate');
    const navList = button.closest(selectors.footerTitleWrapper).nextElementSibling;
    navList.classList.toggle('footer__navigation-items_opened');
  });
});
