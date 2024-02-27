import { select, templates } from '../settings.js';
import utils from '../utils.js';

class AudioPlayer {
  constructor(id, data) {
    const thisAudioPlayer = this;
    thisAudioPlayer.id = id;
    thisAudioPlayer.data = data;
    thisAudioPlayer.renderPlayList();
  }

  renderPlayList () {
    const thisAudioPlayer = this;
    const generatedHTML = templates.audioPlayer(thisAudioPlayer.data);
    thisAudioPlayer.element = utils.createDOMFromHTML(generatedHTML);
    const playListContainer = document.querySelector(select.containerOf.playList);
    playListContainer.appendChild(thisAudioPlayer.element);
  }
}

export default AudioPlayer;