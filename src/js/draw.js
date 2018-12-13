import time from './time';

class Draw {
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

  drawRect(ctx, x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
  }

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
