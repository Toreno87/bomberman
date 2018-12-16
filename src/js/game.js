import settings from './config/settings';
import state from './state';
import level from './level';
import Canvas from './libs/canvas';
import Logic from './logic/logic';
import Draw from './draw/draw';
import Render from './libs/render';

class Game {
  constructor() {
    this.settings = settings;
    this.state = state;
    this.level = level;
    this.currentLevelData = this.level.getData();
    this.currentLevelIndex = this.level.getIndex();

    this.gameWrapper = document.getElementById('game_wrapper');
    this.canvasBg = new Canvas(this, 1);
    this.canvasBricks = new Canvas(this, 2);
    this.canvas = new Canvas(this, 3);

    this.logic = new Logic(this);
    this.draw = new Draw(this);
    this.render = new Render(this);

    this.init();
  }

  /**
   * @param {number} lvl
   */
  setLevel(lvl) {
    this.level.set(lvl);
    this.currentLevelData = this.level.getData();
    this.currentLevelIndex = this.level.getIndex();
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
