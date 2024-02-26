import HomePage from './components/homePage.js';
import { select } from './settings.js';

const app = {
  initHome: function () {
    const thisApp = this;
    thisApp.homePage = document.querySelector(select.containerOf.homePage);
    new HomePage(thisApp.homePage);
  },

  init: function () {
    const thisApp = this;
    thisApp.initHome();
  }
};

app.init();