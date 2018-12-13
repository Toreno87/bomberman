import State from './state';
import Canvas from './canvas';
import Logic from './logic';
import Draw from './draw';
import Render from './render';

class Game {
  constructor() {
    this.state = new State();

    let gameWrapper = document.getElementById('game_wrapper');
    this.canvasBg = new Canvas(gameWrapper, 1);
    this.canvas = new Canvas(gameWrapper, 2);
    this.logic = new Logic(this);
    this.draw = new Draw(this);
    this.render = new Render(this);

    this.init();
  }

  init() {
    this.render.start();
  }
}

export default Game;
