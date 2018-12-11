class Game {
  constructor() {
    this.time = 100500;
    this.isPaused = false;
  }

  play() {
    this.isPaused = false;
  }

  pause() {
    this.isPaused = true;
  }
}

export default Game;
