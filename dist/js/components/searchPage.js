import { select, templates } from '../settings.js';
import utils from '../utils.js';

class SearchPage {
  constructor(element, data) {
    const thisSearchPage = this;

    thisSearchPage.data = data;
    thisSearchPage.render(element);
    thisSearchPage.filterData();
  }

  render(element) {
    const thisSearchPage = this;

    const generatedHTML = templates.searchPage();
    thisSearchPage.dom = {};
    thisSearchPage.dom.wrapper = element;
    thisSearchPage.dom.wrapper.innerHTML = generatedHTML;
    thisSearchPage.element = utils.createDOMFromHTML(generatedHTML);
  }

  filterData() {
    const thisSearchPage = this;

    const searchForm = document.querySelector(select.containerOf.searchPage.form);
    const searchButton = document.querySelector(select.containerOf.searchPage.button);
    const formInput = document.querySelector(select.containerOf.searchPage.formInput);

    searchForm.addEventListener('submit', () => {
      const filteredData = thisSearchPage.data.filter(song => {
        return utils.strContains(song.filename.replace(/mp3|_/g, ''), formInput.value);
      });
      console.log(filteredData);
    });
  }
}

export default SearchPage;