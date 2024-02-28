import { select, templates } from '../settings.js';
import utils from '../utils.js';
import AudioPlayer from './audioPlayer.js';

class DiscoverPage {
  constructor(element, data) {
    const thisDiscoverPage = this;
    thisDiscoverPage.randomSong = null;
    thisDiscoverPage.render(element);
    thisDiscoverPage.getRandomSong(data);
  }

  render(element) {
    const thisDiscoverPage = this;
    const generatedHTML = templates.discoverPage();
    thisDiscoverPage.dom = {};
    thisDiscoverPage.dom.wrapper = element;
    thisDiscoverPage.dom.wrapper.innerHTML = generatedHTML;
    thisDiscoverPage.element = utils.createDOMFromHTML(generatedHTML);
  }

  getRandomSong(data) {
    const thisDiscoverPage = this;
    thisDiscoverPage.data = data;
    const discoverLink = document.querySelector(select.nav.discoverLink);
    discoverLink.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * thisDiscoverPage.data.length);
      thisDiscoverPage.randomSong = thisDiscoverPage.data[randomIndex];
    });
  }

  initPlayer() {
    const thisDiscoverPage = this;
    // eslint-disable-next-line no-undef
    new GreenAudioPlayer('.random-song');
  }

  initPlaylist () {
    const thisDiscoverPage = this;
   
    new AudioPlayer(thisDiscoverPage.randomSong.id, thisDiscoverPage.data );
    thisDiscoverPage.initPlayer();
  }
}

export default DiscoverPage;