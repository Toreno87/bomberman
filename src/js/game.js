import settings from './settings';
import state from './state';
import level from './level';
import Canvas from './canvas';
import Logic from './logic';
import Draw from './draw';
import Render from './render';

class Game {
  constructor() {
    this.settings = settings;
    this.state = state;
    this.level = level;
    this.currentLevel = this.level.get();

    this.gameWrapper = document.getElementById('game_wrapper');
    this.canvasBg = new Canvas(this, 1);
    this.canvasBricks = new Canvas(this, 2);
    this.canvas = new Canvas(this, 3);

    this.logic = new Logic(this);
    this.draw = new Draw(this);
    this.render = new Render(this);

    this.init();
  }

  generateLevel() {

  }

  /**
   * @param {number} lvl
   */
  setLevel(lvl) {
    this.level.set(lvl);
    this.currentLevel = this.level.get();
    this.generateLevel();
  }

  play() {
    this.state.setToPlay();
  }

  pause() {
    this.state.setToPaused();
  }

  init() {
    this.render.start();
  }
}

export default Game;
