import { select, templates } from '../settings.js';
import utils from '../utils.js';

class DiscoverPage {
  constructor(element, data) {
    const thisDiscoverPage = this;
    thisDiscoverPage.render(element);
    thisDiscoverPage.randomSong(data);
    thisDiscoverPage.renderRandomSong();
  }

  render(element) {
    const thisDiscoverPage = this;
    const generatedHTML = templates.discoverPage();
    thisDiscoverPage.dom = {};
    thisDiscoverPage.dom.wrapper = element;
    thisDiscoverPage.dom.wrapper.innerHTML = generatedHTML;
    thisDiscoverPage.element = utils.createDOMFromHTML(generatedHTML);
  }

  randomSong(data) {
    const thisDiscoverPage = this;
    thisDiscoverPage.data = data;
    const discoverLink = document.querySelector(select.nav.discoverLink);
    discoverLink.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * thisDiscoverPage.data.length);
      const randomSong = thisDiscoverPage.data[randomIndex];
      console.log(randomSong);
    });
  }

  renderRandomSong() {
    const thisDiscoverPage = this;
    new GreenAudioPlayer('.random-song');
  }
}


export default DiscoverPage;