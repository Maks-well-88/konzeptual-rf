const quickheaderButton = document.querySelector('.quickheader');

window.onscroll = () => {
  if (window.scrollY > 2150) {
    quickheaderButton.classList.add('quickheader_active');
  } else if (window.scrollY < 2150) {
    quickheaderButton.classList.remove('quickheader_active');
  }
};

quickheaderButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
