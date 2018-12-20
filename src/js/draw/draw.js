import time from '../game/time';
import image from '../libs/image';
import imagePaths from '../game/image-paths';

class Draw {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.time = time;
    this.image = image;
    this.imagePaths = imagePaths;
    this.objects = this.game.objects;
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

  drawBricks() {
    let grid = this.game.levelData.grid;

    for (let row = 0; row < grid.length; row++) {
      let currentRow = grid[row];

      for (var cell = 0; cell < currentRow.length; cell++) {
        let currentType = currentRow[cell];

        this.drawBrickByType(currentType, cell, row);
      }
    }
  }

  /**
   * @param {Number} type
   * @param {Number} cell
   * @param {Number} row
   */
  drawBrickByType(type, cell, row) {
    let context = this.getContextByBrickType(type);
    let brickPath = `${this.imagePaths.getCurrentTheme()}/brick_${type}.svg`;

    context.drawImage(
      this.image.getBySrc(brickPath),
      cell * this.game.settings.cellSize,
      row * this.game.settings.cellSize,
      this.game.settings.cellSize,
      this.game.settings.cellSize
    );
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

  init() {
    this.drawBricks();
  }

  drawPlayer() {
    let player = this.objects.player;

    if (player) {
      this.game.canvas.ctx.drawImage(
        this.image.getBySrc(this.imagePaths.objects + '/' + player.imageName),
        player.x,
        player.y,
        player.width,
        player.height
      );
    }
  }

  drawEnemies() {
    let enemies = this.objects.enemies;

    if (enemies && enemies.length) {
      for (let index in enemies) {
        let enemy = enemies[index];

        this.game.canvas.ctx.drawImage(
          this.image.getBySrc(this.imagePaths.objects + '/' + enemy.imageName),
          enemy.x,
          enemy.y,
          enemy.width,
          enemy.height
        );
      }
    }
  }

  refresh() {
    this.clearCanvas(this.game.canvas);
    this.drawEnemies();
    this.drawPlayer();
  }
};

export default Draw;
