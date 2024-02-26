import HomePage from './components/homePage.js';
import { select, settings } from './settings.js';

const app = {
  initHome: function () {
    const thisApp = this;
    thisApp.homePage = document.querySelector(select.containerOf.homePage);
    new HomePage(thisApp.homePage);
  },


  initData: function () {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.songs;
    thisApp.data = {};
    fetch(url)
      .then(rawResponse => rawResponse.json())
      .then(parsedResponse => {
        thisApp.data = parsedResponse;
        console.log(parsedResponse);
      });
  },

  init: function () {
    const thisApp = this;
    thisApp.initHome();
    thisApp.initData();
  }
};

app.init();