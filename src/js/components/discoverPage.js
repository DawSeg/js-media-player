import { templates } from '../settings.js';
import utils from '../utils.js';

class DiscoverPage {
  constructor(element) {
    const thisDiscoverPage = this;

    thisDiscoverPage.render(element);
  }
  
  render(element) {
    const thisDiscoverPage = this;

    const generatedHTML = templates.discoverPage();
    thisDiscoverPage.dom = {};
    thisDiscoverPage.dom.wrapper = element;
    thisDiscoverPage.dom.wrapper.innerHTML = generatedHTML;
    thisDiscoverPage.element = utils.createDOMFromHTML(generatedHTML);
  }
}

export default DiscoverPage;