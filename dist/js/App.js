import HomePage from './components/homePage';
import { select } from './settings';

const app = {
  initHome: () => {
    const thisApp = this;
    thisApp.homePage = document.querySelector(select.containerOf.homePage);
    new HomePage(thisApp.homePage);
  },

  init: () => {
    const thisApp = this;
    thisApp.initHome();
  }
};

app.init();