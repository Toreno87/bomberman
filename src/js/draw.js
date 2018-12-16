import time from './time';
import image from './image';

class Draw {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.time = time;
    this.image = image;

    this.generateLevel();
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
  }

  generateLevel() {
    let grid = this.game.currentLevelData.grid;
    for (let row = 0; row < grid.length; row++) {
      let currentRow = grid[row];

      for (var cell = 0; cell < currentRow.length; cell++) {
        let currentType = currentRow[cell];

        this.drawBrickByType(currentType, row, cell);
      }
    }
  }

  /**
   * @param {Number} type
   */
  drawBrickByType(type, row, cell) {
    let context = this.getContextByBrickType(type);
    let brickPath = `/images/themes/default/brick_${type}.svg`;

    this.image.loadBySrc(brickPath).then(() => {
      context.drawImage(
        this.image.getBySrc(brickPath),
        cell * this.game.settings.cellSize,
        row * this.game.settings.cellSize,
        this.game.settings.cellSize,
        this.game.settings.cellSize
      );
    });
  }

  /**
   * @param {* Number} type
   */
  getContextByBrickType(type) {
    let brickTypes = this.game.settings.bricks;
    let context = this.game.canvasBg.ctx;

    if (type == brickTypes.default) {
      context = this.game.canvasBricks.ctx;
    }

    return context;
  }
};

export default Draw;
