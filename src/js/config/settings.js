function Settings() {
  this.cellSize = 64;
  this.canvasWidth = this.cellSize * 11;
  this.canvasHeight = this.cellSize * 11;
  this.bricks = {
    empty: 0,
    static: 1,
    default: 2,
  };

  this.hotkeys = {
    up: 'KeyW',
    down: 'KeyS',
    left: 'KeyA',
    right: 'KeyD',
    bomb: 'Space',
  }
}

let settings = new Settings();

export default settings;
