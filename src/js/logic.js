import time from './time';

class Logic {
  constructor(game) {
    this.game = game;
    this.time = time;

    this.game.state.setToPlay();
  }

  refresh() {

  }
};

export default Logic;
