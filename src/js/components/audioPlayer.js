import { select, templates } from '../settings.js';
import utils from '../utils.js';

class AudioPlayer {
  constructor(id, data) {
    const thisAudioPlayer = this;

    thisAudioPlayer.id = id;
    thisAudioPlayer.data = data;
    thisAudioPlayer.renderPlayList();
  }

  renderPlayList() {
    const thisAudioPlayer = this;
    
    const generatedHTML = templates.audioPlayer(thisAudioPlayer.data);
    thisAudioPlayer.element = utils.createDOMFromHTML(generatedHTML);
    const playListContainers = document.querySelectorAll(select.containerOf.playList);
    for (let container of playListContainers) {
      container.appendChild(thisAudioPlayer.element);
    }
  }
}

export default AudioPlayer;