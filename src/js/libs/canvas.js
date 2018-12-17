class Canvas {
  /**
   * @param {Object} game
   * @param {Number} zIndex
   */
  constructor(game, zIndex) {
    this.game = game;
    this.width = this.game.settings.canvasWidth;
    this.height = this.game.settings.canvasWidth;
    this.zIndex = zIndex || 'auto';
    this.wrapper = this.game.gameWrapper;

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.create();
  }

  create() {
    let pixelRatio = (window.devicePixelRatio || 1);

    this.canvas.width = this.width * pixelRatio;
    this.canvas.height = this.height * pixelRatio;
    this.canvas.style.width = (this.width + 'px');
    this.canvas.style.height = (this.height + 'px');
    this.canvas.style.position = 'absolute';
    this.canvas.style.zIndex = this.zIndex;
    this.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    this.wrapper.append(this.canvas);
  }
}

export default Canvas;
