const dataSlides = [
  {
    href: 'https://konzeptual.ru/zasluzhennyj-prigovor-oshibki-i-prestuplenija-zinov-evskoj-oppozicii-11818/',
    src: './images/slider/banner-4.jpg',
    text: 'Заслуженный приговор. Ошибки и преступления «зиновьевской» оппозиции',
  },
  {
    href: 'https://konzeptual.ru/uchebnaja-literatura/knigi-obrazovanie-pedagogika-sovetskie-uchebniki/',
    src: './images/slider/banner-2.jpg',
    text: 'Советские учебники',
  },
  {
    href: 'https://konzeptual.ru/nebopolitika-kratkij-kurs-11909/',
    src: './images/slider/banner-3.jpg',
    text: 'Небополитика. Краткий курс',
  },
  {
    href: 'https://konzeptual.ru/politbyuro-i-sekretariat-ck-v-1945-1985-gg-lyudi-i-vlast-11816/',
    src: './images/slider/banner-1.jpeg',
    text: 'Политбюро и Секретариат ЦК в 1945-1985 гг.: люди и власть',
  },
];

const carousel = document.querySelector('.carousel');
const caruselPhoto = carousel.querySelector('.carousel__photo');
const template = document.querySelector('.slide-template').content.querySelector('.carousel__element');

function createSlide(href, src, text) {
  const slide = template.cloneNode(true);
  const link = slide.querySelector('.carousel__link');
  const image = slide.querySelector('.carousel__photo');
  link.href = href;
  image.src = src;
  image.alt = text;
  return slide;
}

dataSlides.forEach((slide) => carousel.prepend(createSlide(slide.href, slide.src, slide.text)));

let step = 0;
const slides = carousel.querySelectorAll('.carousel__element');
const dots = carousel.querySelectorAll('.carousel__dot');
slides[0].classList.add('carousel__element_active');
dots[0].classList.add('carousel__dot_active');

const activeSlide = (index) => {
  slides.forEach((slide) => slide.classList.remove('carousel__element_active'));
  slides[index].classList.add('carousel__element_active');
};

const activeDot = (index) => {
  dots.forEach((dot) => dot.classList.remove('carousel__dot_active'));
  dots[index].classList.add('carousel__dot_active');
};

const prepareElements = (n) => {
  activeSlide(n);
  activeDot(n);
};

const nextSlide = () => {
  if (step === slides.length - 1) {
    step = 0;
    prepareElements(step);
  } else {
    step++;
    prepareElements(step);
  }
};

const prevSlide = () => {
  if (step === 0) {
    step = slides.length - 1;
    prepareElements(step);
  } else {
    step--;
    prepareElements(step);
  }
};

dots.forEach((item, index) => {
  item.addEventListener('click', () => {
    step = index;
    prepareElements(step);
  });
});

setInterval(nextSlide, 7000);
