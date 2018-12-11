class Game {
  constructor(canvas, canvasBg) {
    this.time = 100500;
    this.isPaused = false;

    this.canvas = canvas;
    this.canvasBg = canvasBg;
  }

  play() {
    this.isPaused = false;
  }

  pause() {
    this.isPaused = true;
  }
}

export default Game;
