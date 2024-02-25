import HomePage from './components/homePage';
import { select } from './settings';

const app = {
  initHome: () => {
    const homePage = document.querySelector(select.containerOf.homePage);
    new HomePage(homePage);
  },


  init: () => {
    const thisApp = this;
    thisApp.initHome();
  }
};
app.init();