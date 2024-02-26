import { templates } from '../settings.js';
import utils from '../utils.js';

class SearchPage {
  constructor(element) {
    const thisSearchPage = this;

    thisSearchPage.render(element);
  }
  
  render(element) {
    const thisSearchPage = this;

    const generatedHTML = templates.searchPage();
    thisSearchPage.dom = {};
    thisSearchPage.dom.wrapper = element;
    thisSearchPage.dom.wrapper.innerHTML = generatedHTML;
    thisSearchPage.element = utils.createDOMFromHTML(generatedHTML);
  }
}

export default SearchPage;