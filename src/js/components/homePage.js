import { templates } from '../settings.js';
import utils from '../utils.js';

class HomePage {
  constructor(element) {
    const thisHomePage = this;

    thisHomePage.render(element);
  }
  
  render(element) {
    const thisHomePage = this;

    const generatedHTML = templates.homePage();
    thisHomePage.dom = {};
    thisHomePage.dom.wrapper = element;
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
    thisHomePage.element = utils.createDOMFromHTML(generatedHTML);

  }
}

export default HomePage;