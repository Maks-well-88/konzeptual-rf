const initialPosts = [
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0-%D1%82%D0%B0%D0%B9%D0%BD%D1%8B%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%8B-%D0%B2-%D1%84%D0%B8/',
    src: './images/shegalow-on-air.jpeg',
    time: '06 мая 2022',
    text: 'Практика заговора, тайные символы в фильмах, оккультные игры элиты. Вадим Шегалов',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BA%D0%BE%D1%80%D0%BD%D0%B8-%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D1%80%D0%B8%D0%B7%D0%B8%D1%81%D0%B0-%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D1%81%D0%BF/',
    src: './images/spicyn-on-air.jpeg',
    time: '11 мая 2022',
    text: 'Корни украинского кризиса. Евгений Спицын',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D1%81%D0%BE%D0%BB%D0%BE%D0%BD%D1%8C%D0%BA%D0%BE/',
    src: './images/solonko-kosmos.jpeg',
    time: '14 мая 2022',
    text: 'Русские всегда первые. Игорь Солонько',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D1%8E%D1%80%D0%B8%D0%B9-%D0%B6%D1%83%D0%BA%D0%BE%D0%B2/',
    src: './images/jykov-posol.jpeg',
    time: '16 мая 2022',
    text: 'Исторический анализ книги. Юрий Жуков',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BB%D0%B5%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5-%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%B8%D0%B1%D1%80%D0%B8%D0%B4%D0%BD/',
    src: './images/efimov-streight.jpeg',
    time: '17 мая 2022',
    text: 'Летальное оружие возмездия в гибридной войне. Виктор Ефимов',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BB%D0%B8-%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D0%B7%D0%B0/',
    src: './images/platoshkin-img.jpeg',
    time: '20 мая 2022',
    text: 'Народное восстание или провокация Запада. Николай Платошкин',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BA%D0%B0%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D1%8B/',
    src: './images/rode-img.jpeg',
    time: '21 мая 2022',
    text: 'Как профессиональные революционеры ушли в подполье. Дмитрий Роде',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B4%D0%B5%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%BE%D1%82%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D1%82%D1%81%D1%8F-%D0%B5/',
    src: './images/lebedeva-img.jpeg',
    time: '25 мая 2022',
    text: 'Послеродовая депрессия отменяется! Елена Лебедева',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%B3%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%B0%D0%BA-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B0%D0%BD%D1%82%D0%B8%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/',
    src: './images/schischova-img.jpeg',
    time: '28 мая 2022',
    text: 'Глобализация – как проект антижизни. Татьяна Шишова',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BF%D0%B5%D1%80%D0%B5%D1%8F%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%80%D0%B0%D0%B4%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%81%D0%B8%D0%BD%D0%B5%D0%BB%D0%BE%D0%B1%D0%BE/',
    src: './images/sinelobov-img.jpeg',
    time: '29 мая 2022',
    text: 'Переяславская рада. Алексей Синелобов',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BB%D0%B8%D0%B1%D0%B5%D1%80%D0%B0%D0%BB%D1%8B-%D0%B8-%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B2-%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC-%D0%BA%D0%B8%D0%BD/',
    src: './images/razzakov-dubble-img.jpeg',
    time: '02 июня 2022',
    text: 'Либералы и державники в советском кинематографе. Фёдор Раззаков',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%B4%D0%B0%D0%B2%D0%BE%D1%81%D1%81%D0%BA%D0%B8%D0%B5-%D0%B4%D1%83%D0%BC%D1%8B-%D0%B8-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B5-%D0%BD%D0%B0%D1%88%D0%B8%D1%85-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-%D0%B8/',
    src: './images/mychina-img.jpeg',
    time: '03 июня 2022',
    text: 'Давосские думы и будущее наших детей. Ирина Мухина',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%81%D1%82%D0%B0%D0%BB%D0%B8%D0%BD-%D0%BF%D1%80%D0%B5%D0%B4%D0%B2%D0%B8%D0%B4%D0%B5%D0%BB-%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8E-%D0%BD%D0%B0-%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B5/',
    src: './images/sapelkin-img.jpeg',
    time: '08 июня 2022',
    text: 'Сталин предвидел ситуацию на Украине. Николай Сапелкин',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%B8%D0%BD%D0%B5%D0%BC%D0%B0%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-%D0%BF%D1%80%D0%B8%D0%B7%D0%BC%D1%83/',
    src: './images/razzakov-img.jpeg',
    time: '10 июня 2022',
    text: 'Советский кинематограф через призму противостояния режиссеров в прокате и на экране. Фёдор Раззаков',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B7%D0%B0%D0%BF%D0%B0%D0%B4-%D1%86%D0%B5%D0%BD%D0%B0-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B0-%D0%B2%D0%B0%D1%80%D0%B4%D0%B0/',
    src: './images/bagdasaryan-img.jpg',
    time: '11 июня 2022',
    text: '«Проект Запад» – цена вопроса. Вардан Багдасарян',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%85%D0%BE%D0%B7%D1%8F%D0%B5%D0%B2%D0%B0-%D0%BC%D0%B8%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2-%D1%80%D0%BE%D1%81%D1%81/',
    src: './images/Artamonov-img.jpg',
    time: '16 июня 2022',
    text: 'Современные хозяева мира против России. Александр Артамонов',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%87%D1%82%D0%BE-%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B0%D0%B5%D1%82-%D0%BE%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%BE%D1%82/',
    src: './images/efimov-img.jpg',
    time: '19 июня 2022',
    text: 'Что отличает осознанного человека от обывателя? Виктор Ефимов',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%82%D1%80%D0%B0%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B3%D0%B5%D0%BD%D1%81%D0%B5%D0%BA%D0%BE%D0%B2-%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D1%81%D0%BF%D0%B8%D1%86%D1%8B%D0%BD/',
    src: './images/spicyn-img.jpg',
    time: '21 июня 2022',
    text: 'Траектория генсеков. Евгений Спицын',
  },
  {
    href: '/second.html',
    src: './images/jykov-img.jpg',
    time: '25 июня 2022',
    text: 'Гордиться, а не каяться! Жуков Юрий',
  },
  {
    href: 'http://xn--80ajoghfjyj0a.xn--p1ai/%D1%81%D1%82%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B5-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B5-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5/',
    src: './images/katasonov-img.jpg',
    time: '27 июня 2022',
    text: 'Сталинские решения в экономике применимы сейчас. Валентин Катасонов',
  },
];

const elementsBlock = document.querySelector('.elements');

function createPost(href, src, time, text) {
  const post = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
  const image = post.querySelector('.element__image');
  const date = post.querySelector('.element__entry-date');
  const title = post.querySelector('.element__title');
  const articlePointer = post.querySelector('.element__details');
  post.href = href;
  image.src = src;
  image.alt = text;
  date.textContent = time;
  title.textContent = text;
  post.addEventListener('mouseover', () => articlePointer.classList.add('element__details_active'));
  post.addEventListener('mouseout', () => articlePointer.classList.remove('element__details_active'));
  return post;
}

function createInitialPosts(initialPosts) {
  initialPosts.forEach((post) => {
    const element = createPost(post.href, post.src, post.time, post.text);
    elementsBlock.prepend(element);
  });
}

createInitialPosts(initialPosts);
