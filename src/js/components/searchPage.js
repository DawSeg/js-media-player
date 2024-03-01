import { select, templates } from '../settings.js';
import utils from '../utils.js';
import AudioPlayer from './audioPlayer.js';

class SearchPage {
  constructor(element, data) {
    const thisSearchPage = this;

    thisSearchPage.filteredData = [];
    thisSearchPage.data = data;
    thisSearchPage.render(element);
    thisSearchPage.initAudioPlayer();
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
    const formInput = document.querySelector(select.containerOf.searchPage.formInput);
    const foundSongsHeader = document.querySelector(select.containerOf.searchPage.header);

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      thisSearchPage.filteredData = thisSearchPage.data.filter(song => {
        return utils.strContains(song.filename.replace(/mp3|_/g, ' '), formInput.value);
      });
      if(thisSearchPage.filteredData.length === 1 ){
        foundSongsHeader.textContent = `We have found ${thisSearchPage.filteredData.length} song...`;
      } else {
        foundSongsHeader.textContent = `We have found ${thisSearchPage.filteredData.length} songs...`;
      }
      thisSearchPage.initAudioPlayer();
      
    });
  }

  initAudioPlayer() {
    const thisSearchPage = this;

    thisSearchPage.filteredData.forEach(song => {
      // eslint-disable-next-line no-undef
      new GreenAudioPlayer('.search-song');
      new AudioPlayer(song.id, song);
      console.log('player for:', song);
    });
  }
}

export default SearchPage;
