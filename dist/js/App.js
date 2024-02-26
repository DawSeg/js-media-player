import HomePage from './components/homePage.js';
import { select, settings } from './settings.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromhash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages) {
      if(page.id == idFromhash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
        //window.scrollTo(0, 0);
      });
    }
    // window.addEventListener('scroll', function(event) {
    //  event.preventDefault();
    // }, { passive: false });
  },

  activatePage: function (pageId) {
    const thisApp = this;
    for (let page of thisApp.pages) {
      page.classList.toggle(select.classNames.active, page.id == pageId);
    }
    for (let link of thisApp.navLinks) {
      link.classList.toggle(select.classNames.active,
        link.getAttribute('href') == '#' + pageId);
    }
  },


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
    thisApp.initPages();
  }
};

app.init();