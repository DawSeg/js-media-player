export const select = {
  templateOf: {
    homePage: '#template-home-page',
  },
  containerOf: {
    homePage: '.home-page-wrapper'
  }
};

export const templates = {
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHTML),
};

export const settings = {
  db: {
    url: '//' + window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
  }
};
