export const select = {
  templateOf: {
    homePage: '#template-home-page',
    searchPage: '#template-search-page',
    discoverPage: '#template-discover-page',
  },
  containerOf: {
    homePage: '.home-page-wrapper',
    searchPage: 'search-page-wrapper',
    discover: 'discover-page-wrapper',
    pages: '#pages',
  },
  classNames: {
    active: 'active',
  },
  nav: {
    links: '.nav-wrapper a'
  }
};

export const templates = {
  searchPage: Handlebars.compile(
    document.querySelector(select.templateOf.searchPage).innerHTML),
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHTML),
  discoverPage: Handlebars.compile(
    document.querySelector(select.templateOf.discoverPage).innerHTML),
};

export const settings = {
  db: {
    url: '//' + window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
  }
};
