import time from './time';

class Render {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.time = time;
    window.requestAnimationFrame = this.getRequestAnimationFrame();
  }

  /**
   * @returns {function} requestAnimationFrame
   */
  getRequestAnimationFrame() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }

  start() {
    let timeNow = new Date().getTime();
    this.time.dt = (timeNow - (this.time.timeCanvas || timeNow)) / 1000;
    this.time.timeCanvas = timeNow;
    this.time.timer = (this.time.timeCanvas - this.time.timeStart) / 1000;

    if (!this.game.state.isPaused()) {
      this.time.gameTimer += (1 * this.time.dt);

      this.game.logic.refresh();
      this.game.draw.refresh();
    }

    window.requestAnimationFrame(() => { this.start(); }, this.game.canvas.canvas);
  }
}

export default Render;