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
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.position = 'absolute';
    this.canvas.style.zIndex = this.zIndex;
    this.wrapper.append(this.canvas);
  }
}

export default Canvas;
