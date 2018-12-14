import state from './state';
import level from './level';
import Canvas from './canvas';
import Logic from './logic';
import Draw from './draw';
import Render from './render';

class Game {
  constructor() {
    this.state = state;
    this.level = level;

    let gameWrapper = document.getElementById('game_wrapper');
    this.canvasBg = new Canvas(gameWrapper, 1);
    this.canvas = new Canvas(gameWrapper, 2);
    this.logic = new Logic(this);
    this.draw = new Draw(this);
    this.render = new Render(this);

    this.init();
  }

  /**
   * @param {number} lvl
   */
  setLevel(lvl) {
    this.level.setLvl(lvl);
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
