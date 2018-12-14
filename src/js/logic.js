import time from './time';

class Logic {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.time = time;

    this.game.play();
  }

  refresh() {

  }
};

export default Logic;
