import { templates } from '../settings.js';
import utils from '../utils.js';

class AudioPlayer {
  constructor(id, data, element) {
    const thisAudioPlayer = this;
    thisAudioPlayer.id = id;
    thisAudioPlayer.data = data;
    thisAudioPlayer.renderPlayList(element);
  }

  renderPlayList(element) {
    const thisAudioPlayer = this;

    const generatedHTML = templates.audioPlayer(thisAudioPlayer.data);
    thisAudioPlayer.element = utils.createDOMFromHTML(generatedHTML);
    element.appendChild(thisAudioPlayer.element);
  }
}

export default AudioPlayer;