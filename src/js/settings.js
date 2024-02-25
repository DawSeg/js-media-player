export const select = {
  templateOf: {
    homePage: '#home-page',
  },
  containerOf: {
    homePage: '.home-page'
  }
};

export const templates = {
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHTML),
};
