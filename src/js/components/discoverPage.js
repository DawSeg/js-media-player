import { select, templates } from '../settings.js';
import utils from '../utils.js';
import AudioPlayer from './audioPlayer.js';

class DiscoverPage {
  constructor(element, data) {
    const thisDiscoverPage = this;

    thisDiscoverPage.data = data;
    thisDiscoverPage.audioPlayer = null;
    thisDiscoverPage.randomSong = null;
    thisDiscoverPage.render(element);
    thisDiscoverPage.initAudioPlayer();
    thisDiscoverPage.getRandomSong();
  }

  render(element) {
    const thisDiscoverPage = this;

    const generatedHTML = templates.discoverPage();
    thisDiscoverPage.dom = {};
    thisDiscoverPage.dom.wrapper = element;
    thisDiscoverPage.dom.wrapper.innerHTML = generatedHTML;
    thisDiscoverPage.element = utils.createDOMFromHTML(generatedHTML);
  }

  getRandomSong() {
    const thisDiscoverPage = this;

    const discoverLink = document.querySelector(select.nav.discoverLink);
    discoverLink.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * thisDiscoverPage.data.length);
      thisDiscoverPage.randomSong = thisDiscoverPage.data[randomIndex];
      if (thisDiscoverPage.randomSong) {
        console.log(thisDiscoverPage.randomSong);
        thisDiscoverPage.audioPlayer.update(thisDiscoverPage.randomSong);
      } else {
        console.error('Random song not selected yet.');
      }
    });
  }

  initAudioPlayer() {
    const thisDiscoverPage = this;

    // eslint-disable-next-line no-undef
    new GreenAudioPlayer('.random-song');
    thisDiscoverPage.audioPlayer = new AudioPlayer(
      thisDiscoverPage.randomSong.id, thisDiscoverPage.randomSong);
  }
}

export default DiscoverPage;