class Draw {
  constructor(game) {
    this.game = game;

    this.drawOnCanvasBg();
    this.drawOnCanvas();
  }

  drawRect(ctx, x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
  }

  drawOnCanvasBg() {
    this.drawRect(
      this.game.canvasBg.ctx,
      0,
      0,
      this.game.canvasBg.width,
      this.game.canvasBg.height,
      'grey'
    );
  }

  drawOnCanvas() {
    this.drawRect(
      this.game.canvas.ctx,
      0,
      0,
      64,
      64,
      'orange'
    );
  }
};

export default Draw;
