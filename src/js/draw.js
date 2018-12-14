import time from './time';

class Draw {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.time = time;

    this.a = 1;

    this.drawRect(
      this.game.canvasBg.ctx,
      0,
      0,
      this.game.canvasBg.width,
      this.game.canvasBg.height,
      'grey'
    );
  }

  /**
   * @param {Object} ctx
   * @param {Number} x
   * @param {Number} y
   * @param {Number} width
   * @param {Number} height
   * @param {String} color
   */
  drawRect(ctx, x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
  }

  /**
   * @param {Object} canvas
   */
  clearCanvas(canvas) {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  refresh() {
    this.clearCanvas(this.game.canvas);
    this.drawRect(
      this.game.canvas.ctx,
      this.a += (20 * this.time.dt),
      0,
      64,
      64,
      'orange'
    );
  }
};

export default Draw;
