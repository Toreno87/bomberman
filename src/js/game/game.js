import time from '../game/time';
import settings from '../config/settings';
import state from './state';
import level from './level';
import Canvas from '../libs/canvas';
import Logic from '../logic/logic';
import Draw from '../draw/draw';
import Render from '../libs/render';
import Events from '../libs/events';
import utils from '../utils';

class Game {
  constructor() {
    this.time = time;
    this.utils = utils;
    this.settings = settings;
    this.state = state;
    this.level = level;
    this.levelData = this.level.getData();

    this.gameWrapper = document.getElementById('game_wrapper');
    this.canvasBg = new Canvas(this, 1);
    this.canvasBricks = new Canvas(this, 2);
    this.canvas = new Canvas(this, 3);

    this.resetObjects();
    this.logic = new Logic(this);
    this.draw = new Draw(this);
    this.render = new Render(this);
    this.events = new Events(this);

    this.init();
  }

  play() {
    this.state.setToPlay();
  }

  pause() {
    this.state.setToPaused();
  }

  resetObjects() {
    this.objects = {
      player: null,
      bombs: null,
      enemies: null,
    };
  }

  getPlayer() {
    return this.objects.player;
  }

  /**
   * @param {number} lvl
   */
  generateLevel(lvl) {
    this.level.loadLevel(lvl).then(() => {
      this.levelData = this.level.getData();
      this.logic.init();
      this.draw.init();

      this.play();
    });
  }

  init() {
    this.generateLevel(0);
    this.render.start();
  }
}

export default Game;
